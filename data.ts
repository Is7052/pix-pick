
import { Asset, Category, Collection } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Images', image: 'https://picsum.photos/seed/img1/800/600', icon: 'Camera' },
  { id: '2', name: 'Vectors', image: 'https://picsum.photos/seed/vec1/800/600', icon: 'PenTool' },
  { id: '3', name: 'Icons', image: 'https://picsum.photos/seed/ico1/800/600', icon: 'Grid' },
  { id: '4', name: 'Illustrations', image: 'https://picsum.photos/seed/ill1/800/600', icon: 'Palette' },
  { id: '5', name: 'Mockups', image: 'https://picsum.photos/seed/mkt1/800/600', icon: 'Smartphone' },
  { id: '6', name: 'Backgrounds', image: 'https://picsum.photos/seed/bg1/800/600', icon: 'Layout' },
];

export const POPULAR_ASSETS: Asset[] = [
  { id: 'a1', title: 'Modern Workspace Laptop', type: 'Free', thumbnail: 'https://picsum.photos/seed/p1/400/300', category: 'Images' },
  { id: 'a2', title: 'Minimalist App Icon Set', type: 'Premium', thumbnail: 'https://picsum.photos/seed/p2/400/300', category: 'Icons' },
  { id: 'a3', title: 'Abstract Vector Flow', type: 'Free', thumbnail: 'https://picsum.photos/seed/p3/400/300', category: 'Vectors' },
  { id: 'a4', title: 'Character Design Kit', type: 'Premium', thumbnail: 'https://picsum.photos/seed/p4/400/300', category: 'Illustrations' },
  { id: 'a5', title: 'iPhone 15 Mockup', type: 'Free', thumbnail: 'https://picsum.photos/seed/p5/400/300', category: 'Mockups' },
  { id: 'a6', title: 'Dark Gradient Texture', type: 'Free', thumbnail: 'https://picsum.photos/seed/p6/400/300', category: 'Backgrounds' },
  { id: 'a7', title: 'Eco Friendly Branding', type: 'Premium', thumbnail: 'https://picsum.photos/seed/p7/400/300', category: 'Vectors' },
  { id: 'a8', title: 'Vintage Camera Close-up', type: 'Free', thumbnail: 'https://picsum.photos/seed/p8/400/300', category: 'Images' },
];

export const COLLECTIONS: Collection[] = [
  { id: 'c1', title: 'Business Designs', description: 'Professional templates for corporate presentations and reports.', image: 'https://picsum.photos/seed/coll1/1200/400' },
  { id: 'c2', title: 'Social Media Templates', description: 'Ready-to-use posts and stories for Instagram and TikTok.', image: 'https://picsum.photos/seed/coll2/1200/400' },
  { id: 'c3', title: 'UI Kits', description: 'Comprehensive design systems for web and mobile apps.', image: 'https://picsum.photos/seed/coll3/1200/400' },
  { id: 'c4', title: 'Education Graphics', description: 'Creative assets for schools, universities, and e-learning.', image: 'https://picsum.photos/seed/coll4/1200/400' },
];
