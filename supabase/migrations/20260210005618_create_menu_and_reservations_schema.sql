/*
  # Create menu and reservations schema for The Big Meat restaurant

  1. New Tables
    - `menu_categories`
      - `id` (uuid, primary key)
      - `name` (text) - Category name (e.g., "Appetizers", "From The Butcher")
      - `menu_type` (text) - Either 'food' or 'drinks'
      - `display_order` (integer) - Sort order for display
      - `description` (text, nullable) - Optional category description
      - `created_at` (timestamptz)

    - `menu_items`
      - `id` (uuid, primary key)
      - `category_id` (uuid, foreign key -> menu_categories)
      - `name` (text) - Item name
      - `description` (text, nullable) - Ingredients or description
      - `price` (text) - Price display string (e.g., "150K", "25K/55K")
      - `sub_category` (text, nullable) - Sub-grouping within category (e.g., "Chicken", "Beef")
      - `display_order` (integer) - Sort order
      - `is_featured` (boolean) - Whether to feature on homepage
      - `created_at` (timestamptz)

    - `reservations`
      - `id` (uuid, primary key)
      - `guest_name` (text) - Guest's full name
      - `email` (text) - Guest's email
      - `phone` (text) - Guest's phone number
      - `party_size` (integer) - Number of guests
      - `preferred_date` (date) - Requested date
      - `preferred_time` (text) - Requested time slot
      - `special_requests` (text, nullable) - Any special requests
      - `status` (text) - Reservation status (pending/confirmed/cancelled)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Public read access on menu_categories and menu_items (restaurant menu is public)
    - Insert-only access on reservations for anyone (guests don't need auth to book)
    - No update/delete on reservations from public (staff manages via dashboard)
*/

CREATE TABLE IF NOT EXISTS menu_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  menu_type text NOT NULL CHECK (menu_type IN ('food', 'drinks')),
  display_order integer NOT NULL DEFAULT 0,
  description text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE menu_categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view menu categories"
  ON menu_categories
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE TABLE IF NOT EXISTS menu_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid NOT NULL REFERENCES menu_categories(id),
  name text NOT NULL,
  description text,
  price text NOT NULL,
  sub_category text,
  display_order integer NOT NULL DEFAULT 0,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view menu items"
  ON menu_items
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  guest_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  party_size integer NOT NULL CHECK (party_size > 0 AND party_size <= 20),
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  special_requests text,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create a reservation"
  ON reservations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
