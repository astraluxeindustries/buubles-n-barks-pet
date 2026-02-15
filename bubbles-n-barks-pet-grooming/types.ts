export interface Review {
  id: number;
  author: string;
  text: string;
  rating: number;
  date: string;
}

export interface Service {
  title: string;
  description: string;
  priceStart?: string;
  image: string;
}

export interface GalleryItem {
  id: number;
  url: string;
  caption: string;
}