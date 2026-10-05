import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';

type Message = {
  id: string;
  role: 'user' | 'ai';
  content: string;
};

// Simulated luxury concierge responses
const getAIResponse = (input: string): string => {
  const lower = input.toLowerCase();
  if (lower.includes('service') && lower.includes('best')) return "For a first visit, we highly recommend booking a 'Consultation & Custom Cut'. This allows our stylists to assess your hair history and create a tailored plan for you.";
  if (lower.includes('bridal')) return "We offer bespoke bridal packages. Our bridal specialists work closely with you to design a look that perfectly complements your style. Would you like me to share our bridal lookbook?";
  if (lower.includes('new') && (lower.includes('hair') || lower.includes('style'))) return "A transformation is a wonderful idea. I suggest trying our 'AI Style Finder' above, or booking an in-person consultation where our senior stylists can recommend a cut based on your face shape.";
  return "Thank you for reaching out to Astra. A member of our concierge team will be happy to assist you with this inquiry. In the meantime, you can explore our services menu or book an appointment directly.";
};

export default function AIConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'ai', content: "Welcome to Astra. How may I assist you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', content: userMsg }]);
    setInput('');
    setIsTyping(true);

    // Simulate API delay
    setTimeout(() => {
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'ai', content: getAIResponse(userMsg) }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 h-14 px-6 bg-dark text-white rounded-none flex items-center gap-3 shadow-sm border border-dark hover:bg-bg-base hover:text-dark transition-colors duration-300 cursor-pointer"
          >
            <MessageSquare size={16} />
            <span className="text-small text-current">ASK ASTRA</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-[calc(100vw-48px)] md:w-[380px] h-[500px] max-h-[calc(100vh-48px)] bg-bg-base border border-border-light shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-border-light bg-bg-base">
              <div>
                <h3 className="text-small text-text-primary">ASTRA CONCIERGE</h3>
                <p className="text-[10px] text-muted uppercase tracking-widest mt-1">Digital Assistant</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="bg-transparent border-none cursor-pointer p-1 text-muted hover:text-text-primary transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 ${msg.role === 'user' ? 'bg-dark text-white' : 'bg-[#E8E5DF] text-text-primary'}`}>
                    <p className="text-[13px] leading-relaxed font-sans font-light">{msg.content}</p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] p-4 bg-[#E8E5DF] text-text-primary flex gap-1">
                    <span className="w-1 h-1 bg-muted rounded-full animate-bounce" />
                    <span className="w-1 h-1 bg-muted rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <span className="w-1 h-1 bg-muted rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border-light bg-bg-base">
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 h-12 bg-transparent border border-border-light px-4 text-[13px] font-sans font-light focus:outline-none focus:border-dark transition-colors"
                />
                <button 
                  type="submit" 
                  disabled={!input.trim()}
                  className="h-12 w-12 flex items-center justify-center bg-dark text-white border-none cursor-pointer disabled:opacity-50 transition-opacity"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
