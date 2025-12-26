
export interface Asset {
  id: string;
  title: string;
  type: 'Free' | 'Premium';
  thumbnail: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  icon: string;
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface User {
  name: string;
  email: string;
  avatar?: string;
}

export type View = 'home' | 'login' | 'register' | 'pricing' | 'category' | 'collection';
