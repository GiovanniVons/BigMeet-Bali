export interface MenuCategory {
  id: string;
  name: string;
  menu_type: 'food' | 'drinks';
  display_order: number;
  description: string | null;
}

export interface MenuItem {
  id: string;
  category_id: string;
  name: string;
  description: string | null;
  price: string;
  sub_category: string | null;
  display_order: number;
  is_featured: boolean;
}

export interface Reservation {
  guest_name: string;
  email: string;
  phone: string;
  party_size: number;
  preferred_date: string;
  preferred_time: string;
  special_requests?: string;
}
