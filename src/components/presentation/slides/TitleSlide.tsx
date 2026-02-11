import { Package, MapPin } from "lucide-react";

export const TitleSlide = () => {
  return (
    <div className="slide-container bg-background">
      <div className="max-w-4xl w-full text-center">
        {/* Picker branding */}
        <div className="opacity-0 animate-fade-up">
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">
            Propuesta Comercial
          </p>
        </div>

        {/* Client logo */}
        <div className="my-10 opacity-0 animate-scale-in animation-delay-100">
          <img
            src="/pasteur-logo.png"
            alt="Farmacia Pasteur"
            className="h-16 md:h-20 mx-auto object-contain"
          />
        </div>

        {/* Main title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 opacity-0 animate-fade-up animation-delay-200">
          Optimiza tu logistica con{" "}
          <span className="picker-highlight">Picker</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground font-light mb-12 opacity-0 animate-fade-up animation-delay-300">
          Menor costo por entrega, mayor control, mas eficiencia
        </p>

        {/* Scenario cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto opacity-0 animate-fade-up animation-delay-400">
          <div className="stat-card text-center">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Package className="w-7 h-7 text-primary" />
            </div>
            <p className="text-4xl md:text-5xl font-bold text-foreground">50,000</p>
            <p className="text-muted-foreground mt-2">entregas/mes</p>
          </div>

          <div className="stat-card text-center">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-7 h-7 text-accent" />
            </div>
            <p className="text-4xl md:text-5xl font-bold text-foreground">300+</p>
            <p className="text-muted-foreground mt-2">puntos de venta</p>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-12 opacity-0 animate-fade-up" style={{ animationDelay: '600ms' }}>
          <p className="text-sm text-muted-foreground">
            Escenario actual: Flota interna (35%) + Rappi (65%)
          </p>
        </div>
      </div>
    </div>
  );
};
