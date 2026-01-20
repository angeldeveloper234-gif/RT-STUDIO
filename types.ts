import { LucideIcon } from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  name: string;
  comment: string;
  rating: number;
  imageUrl?: string;
}

export interface ProjectImage {
  url: string;
  alt: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  hours: string[];
  mapsUrl: string;
}