"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "Todos",
    "Identidade Visual",
    "Design Web",
    "Design de Impressão",
    "UI/UX",
  ];

  const projects = [
    {
      id: 1,
      title: "TechFlow - Identidade Visual",
      category: "Identidade Visual",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Design completo de identidade visual para uma startup de tecnologia moderna",
      tags: ["Branding", "Design de Logotipo", "Identidade Visual"],
    },
    {
      id: 2,
      title: "Site EcoGreen",
      category: "Design Web",
      image:
        "https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Design de site responsivo para organização ambiental",
      tags: ["Design Web", "UI/UX", "Responsivo"],
    },
    {
      id: 3,
      title: "Embalagem de Café Artesanal",
      category: "Design de Impressão",
      image:
        "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Design de embalagem de café premium com tipografia elegante",
      tags: ["Embalagem", "Design de Impressão", "Tipografia"],
    },
    {
      id: 4,
      title: "Aplicativo FitTracker",
      category: "UI/UX",
      image:
        "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Interface intuitiva de aplicativo móvel para acompanhamento fitness",
      tags: ["Aplicativo Mobile", "UI/UX", "Experiência do Usuário"],
    },
    {
      id: 5,
      title: "Branding de Hotel de Luxo",
      category: "Identidade Visual",
      image:
        "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Branding sofisticado para rede de hotéis boutique",
      tags: ["Branding", "Design de Luxo", "Hospitalidade"],
    },
    {
      id: 6,
      title: "Série de Pôsteres de Festival",
      category: "Design de Impressão",
      image:
        "https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Designs de pôsteres atraentes para festival de música",
      tags: ["Design de Pôsteres", "Design de Eventos", "Tipografia"],
    },
  ];

  const filteredProjects =
    activeFilter === "Todos"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meu Portfólio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore meus projetos de design mais recentes e soluções criativas que
            ajudaram marcas a contar suas histórias.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className={
                  activeFilter === category
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "border-purple-200 text-purple-700 hover:bg-purple-50"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-3">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white text-gray-900 hover:bg-gray-100"
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      Ver
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white text-gray-900 hover:bg-gray-100"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Online
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <Badge
                    variant="secondary"
                    className="bg-purple-100 text-purple-700"
                  >
                    {project.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
