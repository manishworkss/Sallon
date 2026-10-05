export interface Review {
  id: number;
  text: string;
  author: string;
  isDemo: boolean;
}

// These are demo testimonials, clearly marked as such.
// Replace with actual client reviews when available.
export const reviews: Review[] = [
  {
    id: 1,
    text: 'Astra has been my go-to salon for years. The attention to detail is unmatched.',
    author: 'Demo Review',
    isDemo: true,
  },
  {
    id: 2,
    text: 'I always leave feeling like the best version of myself. True artistry.',
    author: 'Demo Review',
    isDemo: true,
  },
  {
    id: 3,
    text: 'The bridal experience was absolutely beautiful. Every detail was perfect.',
    author: 'Demo Review',
    isDemo: true,
  },
];
