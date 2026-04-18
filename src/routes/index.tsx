import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Cases } from "@/components/sections/Cases";
import { Process } from "@/components/sections/Process";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Evandro Carvalho · Paginas de vendas + Trafego pago para infoprodutores",
      },
      {
        name: "description",
        content:
          "Especialista em paginas de vendas de alta conversao e gestao de trafego pago (Meta Ads) para infoprodutores, coaches e mentores. Entrega em 7 dias.",
      },
      {
        property: "og:title",
        content: "Paginas que vendem. Trafego que escala. — Evandro Carvalho",
      },
      {
        property: "og:description",
        content:
          "Transforme cliques em alunos pagantes com paginas de alta conversao + trafego pago estrategico.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <ProblemSolution />
      <Cases />
      <Process />
      <Pricing />
      <Faq />
      <FinalCta />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
