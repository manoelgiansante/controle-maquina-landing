import { Fuel, MapPin, Users, Smartphone } from "lucide-react";

const stats = [
  {
    icon: MapPin,
    value: "10.000+",
    label: "Máquinas Monitoradas",
    description: "em todo o Brasil",
  },
  {
    icon: Fuel,
    value: "2M+",
    label: "Litros Controlados",
    description: "por mês",
  },
  {
    icon: Smartphone,
    value: "3",
    label: "Plataformas",
    description: "iOS, Android e Web",
  },
  {
    icon: Users,
    value: "500+",
    label: "Produtores",
    description: "confiam em nós",
  },
];

export default function StatsSection() {
  return (
    <section className="py-12 bg-primary">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold text-white/90">
                  {stat.label}
                </p>
                <p className="text-xs text-white/70">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
