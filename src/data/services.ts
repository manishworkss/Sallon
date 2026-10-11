export interface Service {
  id: string;
  name: string;
  description: string;
  category: 'hair' | 'beauty';
  image: string;
  note: string;
}

export const services: Service[] = [
  {
    id: 'haircuts',
    name: 'Haircuts',
    description: 'Precision cuts tailored to your face shape, lifestyle and personal style.',
    category: 'hair',
    image: '/images/astra/hair-colour.jpg',
    note: 'Consultation recommended',
  },
  {
    id: 'styling',
    name: 'Styling',
    description: 'From effortless waves to structured updos. Styling for every occasion.',
    category: 'hair',
    image: '/images/astra/salon-interior.jpg',
    note: 'Consultation recommended',
  },
  {
    id: 'colour',
    name: 'Colour',
    description: 'Dimensional colour, balayage, highlights and full transformations.',
    category: 'hair',
    image: '/images/astra/hair-colour.jpg',
    note: 'Consultation recommended',
  },
  {
    id: 'treatments',
    name: 'Hair Treatments',
    description: 'Restorative and nourishing treatments for healthier, stronger hair.',
    category: 'hair',
    image: '/images/astra/salon-interior.jpg',
    note: 'Contact us for availability',
  },
  {
    id: 'texture',
    name: 'Texture & Treatments',
    description: 'Smoothing, keratin, and texture-enhancing services for all hair types.',
    category: 'hair',
    image: '/images/astra/hair-colour.jpg',
    note: 'Consultation recommended',
  },
  {
    id: 'makeup',
    name: 'Makeup',
    description: 'Professional makeup artistry for special events and everyday elegance.',
    category: 'beauty',
    image: '/images/astra/salon-interior.jpg',
    note: 'Contact us for availability',
  },
  {
    id: 'bridal',
    name: 'Bridal Makeup',
    description: 'Your most beautiful day deserves exceptional artistry and attention.',
    category: 'beauty',
    image: '/images/astra/salon-exterior.jpg',
    note: 'Consultation recommended',
  },
  {
    id: 'facials',
    name: 'Facials',
    description: 'Customized facial treatments for radiant, healthy skin.',
    category: 'beauty',
    image: '/images/astra/salon-interior.jpg',
    note: 'Contact us for availability',
  },
  {
    id: 'skincare',
    name: 'Skincare',
    description: 'Expert skincare consultations and professional-grade treatments.',
    category: 'beauty',
    image: '/images/astra/hair-colour.jpg',
    note: 'Consultation recommended',
  },
  {
    id: 'threading',
    name: 'Threading',
    description: 'Precise threading services for perfectly shaped brows and smooth skin.',
    category: 'beauty',
    image: '/images/astra/salon-interior.jpg',
    note: 'Contact us for availability',
  },
  {
    id: 'hair-removal',
    name: 'Hair Removal',
    description: 'Professional waxing and hair removal for silky-smooth results.',
    category: 'beauty',
    image: '/images/astra/salon-exterior.jpg',
    note: 'Contact us for availability',
  },
];
