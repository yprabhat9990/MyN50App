export function ResourceThemeCard({
  imageSrc,
  title,
  subtitle,
  imageAlt = '',
}: {
  imageSrc: string;
  title: string;
  subtitle: string;
  imageAlt?: string;
}) {
  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-2xl">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        width={400}
        height={320}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
      <div className="absolute bottom-6 left-6 text-white">
        <h4 className="mb-1 text-xl font-bold">{title}</h4>
        <p className="text-sm font-medium opacity-80">{subtitle}</p>
      </div>
    </div>
  );
}
