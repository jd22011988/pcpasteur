import { Users } from "lucide-react";

const clients = [
  { name: "KFC", logo: "🍗" },
  { name: "Fridays", logo: "🍔" },
  { name: "Sushitto", logo: "🍣" },
  { name: "Dunkin'", logo: "🍩" },
  { name: "Justo", logo: "🛒" },
  { name: "Jüsto", logo: "🥑" },
  { name: "Kobe", logo: "🥩" },
  { name: "BR", logo: "🍦" },
  { name: "Krispy Kreme", logo: "🍩" },
  { name: "Pollo Pepe", logo: "🍗" },
  { name: "Papa Johns", logo: "🍕" },
  { name: "Cassolette", logo: "🥘" },
  { name: "La Casa de Toño", logo: "🍲" },
  { name: "Cheaf", logo: "🥗" },
  { name: "Greengrass", logo: "🌿" },
];

export const ClientsSlide = () => {
  return (
    <div className="slide-container bg-background py-6 md:py-10">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-8">
          <span className="benefit-pill mb-3 opacity-0 animate-fade-up">
            <Users className="w-4 h-4" />
            Respaldo
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 opacity-0 animate-fade-up animation-delay-100">
            Portafolio de Clientes
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-up animation-delay-200">
            Marcas que ya confian en Picker para su logistica express
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 md:gap-4 opacity-0 animate-fade-up animation-delay-300">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="stat-card p-4 flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${300 + index * 50}ms` }}
            >
              <span className="text-2xl md:text-3xl mb-2">{client.logo}</span>
              <span className="text-xs md:text-sm font-medium text-foreground leading-tight">
                {client.name}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-6 opacity-0 animate-fade-up" style={{ animationDelay: '800ms' }}>
          <p className="text-sm text-muted-foreground">
            +50 marcas en 7 paises confian en Picker Express
          </p>
        </div>
      </div>
    </div>
  );
};
