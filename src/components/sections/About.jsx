import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Lightbulb, Target, Award } from "lucide-react";

const About = () => {
  const skills = [
    "Adobe Creative Suite",
    "Figma",
    "Sketch",
    "InDesign",
    "Illustrator",
    "Photoshop",
    "Identidade Visual",
    "Design Web",
    "Design Gráfico",
    "Design UI/UX",
    "Tipografia",
    "Teoria das Cores",
  ];

  const features = [
    {
      icon: Palette,
      title: "Visão Criativa",
      description:
        "Transformando ideias em designs visualmente atraentes que ressoam com o público-alvo.",
    },
    {
      icon: Lightbulb,
      title: "Soluções Inovadoras",
      description:
        "Trazendo perspectivas novas e abordagens de design de ponta para cada projeto.",
    },
    {
      icon: Target,
      title: "Pensamento Estratégico",
      description:
        "Projetando com propósito para alcançar objetivos comerciais e de usuário específicos.",
    },
    {
      icon: Award,
      title: "Excelência em Qualidade",
      description:
        "Entregando resultados excepcionais com atenção meticulosa aos detalhes e acabamento.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre Mim
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sou um designer gráfico apaixonado com mais de 5 anos de
            experiência criando soluções visuais impactantes para marcas em todo o mundo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Criando Histórias Visuais que Importam
             </h3>
             <div className="space-y-4 text-gray-600">
               <p>
                 Com um olhar apurado para detalhes e paixão por contar histórias
                 através do design, ajudo empresas a comunicar sua mensagem
                 de forma eficaz por meio de narrativas visuais poderosas.
               </p>
               <p>
                 Minha abordagem combina pensamento estratégico com execução criativa,
                 garantindo que cada design não apenas seja bonito, mas também
                 cumpra um propósito e gere resultados.
               </p>
               <p>
                 Da identidade visual às experiências digitais, crio designs
                 que conectam com o público e deixam impressões duradouras.
               </p>
             </div>

            {/* Skills */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Habilidades e Especialidades
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-purple-100 text-purple-700 hover:bg-purple-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Espaço de trabalho criativo"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
