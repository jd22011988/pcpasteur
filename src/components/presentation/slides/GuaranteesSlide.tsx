import { ShieldCheck, Clock, RefreshCcw, Handshake } from "lucide-react";

export const GuaranteesSlide = () => {
  return (
    <div className="slide-container bg-gradient-to-br from-primary via-primary to-primary/90 py-6 md:py-10">
      <div className="max-w-5xl w-full text-primary-foreground">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white font-medium text-sm mb-4 opacity-0 animate-fade-up">
            <ShieldCheck className="w-4 h-4" />
            Compromiso
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 opacity-0 animate-fade-up animation-delay-100">
            Garantias Picker
          </h1>
          <p className="text-lg md:text-xl font-light opacity-80 opacity-0 animate-fade-up animation-delay-200">
            Cero riesgo para Pasteur
          </p>
        </div>

        {/* Main guarantee */}
        <div className="bg-white rounded-2xl p-6 md:p-8 text-foreground mb-6 opacity-0 animate-scale-in animation-delay-300">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
              <RefreshCcw className="w-7 h-7 text-accent" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Devolucion total del fee de Picker
              </h3>
              <p className="text-muted-foreground">
                En caso de que Pasteur no este satisfecho con el servicio, se devuelve el 100% del fee cobrado por Picker.
                <span className="font-medium text-foreground"> No incluye valor de envios — solo el fee de orquestacion.</span>
              </p>
              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Garantia valida por 3 meses desde la firma del contrato
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional guarantees */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 opacity-0 animate-fade-up animation-delay-400">
            <Handshake className="w-8 h-8 mb-3 opacity-80" />
            <h4 className="font-semibold mb-1">Sin lock-in</h4>
            <p className="text-sm opacity-75">
              Cancelacion con 30 dias de aviso. Sin penalidades, sin letra chica.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 opacity-0 animate-fade-up animation-delay-500">
            <Clock className="w-8 h-8 mb-3 opacity-80" />
            <h4 className="font-semibold mb-1">Uptime 99.5%</h4>
            <p className="text-sm opacity-75">
              SLA de plataforma garantizado. Soporte enterprise con respuesta en menos de 2 horas.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 opacity-0 animate-fade-up" style={{ animationDelay: '600ms' }}>
            <ShieldCheck className="w-8 h-8 mb-3 opacity-80" />
            <h4 className="font-semibold mb-1">Datos son de Pasteur</h4>
            <p className="text-sm opacity-75">
              100% propiedad del cliente. Exportables en cualquier momento, sin restricciones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
