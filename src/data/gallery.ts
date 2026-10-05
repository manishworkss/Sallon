export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/images/astra/hair-colour.jpg',
    alt: 'Dimensional hair colour at Astra Salon',
    category: 'colour',
    aspect: 'landscape',
  },
  {
    id: 2,
    src: '/images/astra/salon-interior.jpg',
    alt: 'Astra Salon interior',
    category: 'beauty',
    aspect: 'portrait',
  },
  {
    id: 3,
    src: '/images/astra/salon-exterior.jpg',
    alt: 'Astra Salon storefront on St. Clair Avenue West',
    category: 'beauty',
    aspect: 'landscape',
  },
  {
    id: 4,
    src: '/images/astra/hair-colour.jpg',
    alt: 'Professional hair styling at Astra',
    category: 'hair',
    aspect: 'landscape',
  },
  {
    id: 5,
    src: '/images/astra/salon-interior.jpg',
    alt: 'Elegant styling stations at Astra Salon',
    category: 'beauty',
    aspect: 'portrait',
  },
  {
    id: 6,
    src: '/images/astra/salon-exterior.jpg',
    alt: 'Astra Salon on a beautiful autumn day',
    category: 'bridal',
    aspect: 'landscape',
  },
];
