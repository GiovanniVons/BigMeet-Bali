import { useState } from 'react';
import { useMenu } from '../hooks/useMenu';
import ScrollReveal from '../components/ScrollReveal';

type MenuTab = 'food' | 'drinks';

export default function MenuPage() {
  const {
    foodCategories,
    drinkCategories,
    getItemsByCategory,
    getSubCategories,
    loading,
  } = useMenu();

  const [activeTab, setActiveTab] = useState<MenuTab>('food');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = activeTab === 'food' ? foodCategories : drinkCategories;
  const displayCategories = activeCategory
    ? categories.filter((c) => c.id === activeCategory)
    : categories;

  return (
    <div className="min-h-screen bg-brand-black pt-20">
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="font-display text-brand-red text-xs tracking-[0.4em] uppercase mb-3">
                The Big Meat
              </p>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold uppercase tracking-wider text-white">
                Our Menu
              </h1>
              <p className="text-white/40 text-sm font-body mt-4">
                All prices in '000 Rupiah. Subject to 10% tax and 5% service charge.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex justify-center gap-2 mb-8">
              {(['food', 'drinks'] as MenuTab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setActiveCategory(null);
                  }}
                  className={`px-6 py-3 font-display text-sm tracking-[0.2em] uppercase transition-all duration-200 ${
                    activeTab === tab
                      ? 'bg-brand-red text-white'
                      : 'bg-brand-dark text-white/50 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 text-xs font-display tracking-[0.15em] uppercase transition-all duration-200 border ${
                  !activeCategory
                    ? 'border-brand-red text-brand-red'
                    : 'border-white/10 text-white/40 hover:text-white/70 hover:border-white/30'
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-display tracking-[0.15em] uppercase transition-all duration-200 border ${
                    activeCategory === cat.id
                      ? 'border-brand-red text-brand-red'
                      : 'border-white/10 text-white/40 hover:text-white/70 hover:border-white/30'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {loading ? (
            <div className="flex justify-center py-24">
              <div className="w-8 h-8 border-2 border-brand-red border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <div className="space-y-16">
              {displayCategories.map((category) => {
                const items = getItemsByCategory(category.id);
                const subCats = getSubCategories(category.id);
                const hasSubCategories = subCats.length > 0;

                return (
                  <ScrollReveal key={category.id}>
                    <div>
                      <div className="mb-8 pb-4 border-b border-brand-red/30">
                        <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white">
                          {category.name}
                        </h2>
                        {category.description && (
                          <p className="text-white/40 text-sm font-body mt-1">
                            {category.description}
                          </p>
                        )}
                      </div>

                      {hasSubCategories ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {subCats.map((sub) => {
                            const subItems = items.filter((i) => i.sub_category === sub);
                            return (
                              <div key={sub}>
                                <h3 className="font-display text-sm tracking-[0.2em] uppercase text-brand-red mb-4 pb-2 border-b border-white/5">
                                  {sub}
                                </h3>
                                <div className="space-y-3">
                                  {subItems.map((item) => (
                                    <MenuItemRow key={item.id} item={item} />
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                          {items.filter((i) => !i.sub_category).length > 0 && (
                            <div>
                              <div className="space-y-3">
                                {items
                                  .filter((i) => !i.sub_category)
                                  .map((item) => (
                                    <MenuItemRow key={item.id} item={item} />
                                  ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                          {items.map((item) => (
                            <MenuItemRow key={item.id} item={item} />
                          ))}
                        </div>
                      )}
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          )}

          <ScrollReveal delay={200}>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-white/10 p-2">
                <p className="text-center font-display text-xs tracking-[0.2em] uppercase text-white/40 mb-3 mt-2">
                  Food Menu
                </p>
                <img
                  src="/menu.webp"
                  alt="The Big Meat food menu"
                  className="w-full"
                  loading="lazy"
                />
              </div>
              <div className="border border-white/10 p-2">
                <p className="text-center font-display text-xs tracking-[0.2em] uppercase text-white/40 mb-3 mt-2">
                  Drinks Menu
                </p>
                <img
                  src="/drinks_menu.webp"
                  alt="The Big Meat drinks menu"
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

function MenuItemRow({ item }: { item: { name: string; description: string | null; price: string } }) {
  return (
    <div className="flex items-start justify-between gap-4 group">
      <div className="min-w-0">
        <div className="flex items-baseline gap-2">
          <h4 className="font-body text-sm text-white group-hover:text-brand-red transition-colors truncate">
            {item.name}
          </h4>
          <span className="flex-1 border-b border-dotted border-white/10 min-w-[2rem] hidden sm:block" />
        </div>
        {item.description && (
          <p className="text-white/30 text-xs font-body mt-0.5 italic">{item.description}</p>
        )}
      </div>
      <span className="font-display text-sm text-brand-red font-semibold whitespace-nowrap">
        {item.price}
      </span>
    </div>
  );
}
