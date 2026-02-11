import { Globe } from "lucide-react";

const countries = [
  { name: "México", flag: "🇲🇽", position: "top-[18%] left-[12%]" },
  { name: "Costa Rica", flag: "🇨🇷", position: "top-[38%] left-[18%]" },
  { name: "Ecuador", flag: "🇪🇨", position: "top-[48%] left-[24%]" },
  { name: "Perú", flag: "🇵🇪", position: "top-[56%] left-[26%]" },
  { name: "Chile", flag: "🇨🇱", position: "top-[72%] left-[28%]" },
  { name: "Colombia", flag: "🇨🇴", position: "top-[36%] left-[52%]" },
  { name: "Uruguay", flag: "🇺🇾", position: "top-[70%] left-[52%]" },
];

export const CoverageSlide = () => {
  return (
    <div className="slide-container bg-background py-6 md:py-10">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-8">
          <span className="benefit-pill mb-3 opacity-0 animate-fade-up">
            <Globe className="w-4 h-4" />
            Cobertura
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 opacity-0 animate-fade-up animation-delay-100">
            Presencia en <span className="picker-highlight">7 paises</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-up animation-delay-200">
            Operacion nativa en toda Latinoamerica
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Country list */}
          <div className="grid grid-cols-2 gap-3 opacity-0 animate-fade-up animation-delay-300">
            {countries.map((country, index) => (
              <div
                key={country.name}
                className={`stat-card p-4 flex items-center gap-3 ${
                  country.name === "Colombia"
                    ? "border-2 border-accent/40 bg-accent/5"
                    : ""
                }`}
              >
                <span className="text-2xl md:text-3xl">{country.flag}</span>
                <div>
                  <p className={`font-semibold text-sm md:text-base ${
                    country.name === "Colombia" ? "text-accent" : "text-foreground"
                  }`}>
                    {country.name}
                  </p>
                  {country.name === "Colombia" && (
                    <p className="text-xs text-accent">Tu mercado</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="space-y-4 opacity-0 animate-scale-in animation-delay-400">
            <div className="stat-card p-6 text-center">
              <p className="text-5xl md:text-6xl font-bold text-foreground mb-2">7</p>
              <p className="text-muted-foreground">paises con operacion activa</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="stat-card p-4 text-center">
                <p className="text-2xl md:text-3xl font-bold" style={{ color: 'hsl(193 100% 45%)' }}>3</p>
                <p className="text-xs text-muted-foreground mt-1">proveedores Tier 1 integrados</p>
              </div>
              <div className="stat-card p-4 text-center">
                <p className="text-2xl md:text-3xl font-bold" style={{ color: 'hsl(193 100% 45%)' }}>8+</p>
                <p className="text-xs text-muted-foreground mt-1">carriers conectados</p>
              </div>
            </div>

            <div className="bg-accent/10 rounded-xl p-4 text-center">
              <p className="text-sm text-accent font-medium">
                Nativo LATAM — no es un producto gringo adaptado
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Cash on delivery, alta densidad urbana, regulaciones locales
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
