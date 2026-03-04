import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { MenuCategory, MenuItem } from '../lib/types';

export function useMenu() {
  const [categories, setCategories] = useState<MenuCategory[]>([]);
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMenu() {
      const [catResult, itemResult] = await Promise.all([
        supabase.from('menu_categories').select('*').order('display_order'),
        supabase.from('menu_items').select('*').order('display_order'),
      ]);

      if (catResult.data) setCategories(catResult.data);
      if (itemResult.data) setItems(itemResult.data);
      setLoading(false);
    }

    fetchMenu();
  }, []);

  const foodCategories = categories.filter((c) => c.menu_type === 'food');
  const drinkCategories = categories.filter((c) => c.menu_type === 'drinks');
  const featuredItems = items.filter((i) => i.is_featured);

  function getItemsByCategory(categoryId: string) {
    return items.filter((i) => i.category_id === categoryId);
  }

  function getSubCategories(categoryId: string) {
    const catItems = getItemsByCategory(categoryId);
    const subs = [...new Set(catItems.map((i) => i.sub_category).filter(Boolean))];
    return subs as string[];
  }

  return {
    categories,
    items,
    foodCategories,
    drinkCategories,
    featuredItems,
    loading,
    getItemsByCategory,
    getSubCategories,
  };
}
