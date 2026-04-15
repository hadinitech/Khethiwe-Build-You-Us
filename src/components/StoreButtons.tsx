type StoreButtonsProps = {
  centered?: boolean;
};

const stores = [
  { label: 'Get it on', name: 'Google Play' },
  { label: 'Download on the', name: 'App Store' },
];

export default function StoreButtons({ centered = false }: StoreButtonsProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${centered ? 'justify-center' : ''}`}>
      {stores.map((store) => (
        <a
          key={store.name}
          href="#"
          className="group min-w-44 rounded-2xl border border-copper/45 bg-gradient-to-br from-noir to-[#261a15] px-4 py-3 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel"
          aria-label={`${store.label} ${store.name}`}
        >
          <p className="text-xs tracking-wide text-beige">{store.label}</p>
          <p className="text-base font-semibold text-cream group-hover:text-white">{store.name}</p>
        </a>
      ))}
    </div>
  );
}
