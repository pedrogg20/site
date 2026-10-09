import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Palette,
  Monitor,
  FileText,
  Smartphone,
  Package,
  Users,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Design de Identidade Visual",
      description:
        "Soluções completas de identidade visual incluindo design de logotipo, paletas de cores, tipografia e diretrizes de marca.",
      features: [
        "Design de Logotipo",
        "Diretrizes de Marca",
        "Paletas de Cores",
        "Tipografia",
      ],
      price: "A partir de R$ 1.500",
    },
    {
      icon: Monitor,
      title: "Design Web",
      description:
        "Designs de sites modernos e responsivos que proporcionam experiências excepcionais em todos os dispositivos.",
      features: [
        "Design Responsivo",
        "Design UI/UX",
        "Prototipagem",
        "Testes de Usabilidade",
      ],
      price: "A partir de R$ 2.500",
    },
    {
      icon: FileText,
      title: "Design de Impressão",
      description:
        "Materiais impressos de alta qualidade incluindo brochuras, folhetos, cartões de visita e materiais de marketing.",
      features: [
        "Brochuras",
        "Cartões de Visita",
        "Pôsteres",
        "Materiais de Marketing",
      ],
      price: "A partir de R$ 500",
    },
    {
      icon: Smartphone,
      title: "Design de Aplicativos Mobile",
      description:
        "Interfaces intuitivas de aplicativos móveis projetadas para engajamento e conversão ótima do usuário.",
      features: ["Design iOS", "Design Android", "Fluxos de Usuário", "Prototipagem"],
      price: "A partir de R$ 3.000",
    },
    {
      icon: Package,
      title: "Design de Embalagem",
      description:
        "Soluções de embalagem atraentes que se destacam nas prateleiras e comunicam os valores da marca.",
      features: [
        "Embalagem de Produto",
        "Design de Rótulos",
        "Design de Caixas",
        "Mockups 3D",
      ],
      price: "A partir de R$ 800",
    },
    {
      icon: Users,
      title: "Consultoria e Estratégia",
      description:
        "Consultoria de design e planejamento estratégico para alinhar sua identidade visual aos objetivos comerciais.",
      features: [
        "Auditoria de Design",
        "Planejamento Estratégico",
        "Posicionamento de Marca",
        "Pesquisa de Mercado",
      ],
      price: "A partir de R$ 200/hora",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meus Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofereço serviços abrangentes de design para ajudar sua marca a se destacar
            e se conectar com seu público.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center justify-center text-sm text-gray-700"
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="text-2xl font-bold text-gray-900 mb-6">
                  {service.price}
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                  Começar Agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Precisa de uma solução personalizada? Vamos discutir suas
            necessidades específicas.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-purple-200 text-purple-700 hover:bg-purple-50"
          >
            Agendar uma Consulta
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
