import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/verum/Navbar";
import { Hero } from "@/components/verum/Hero";
import { StatBanner } from "@/components/verum/StatBanner";
import { Trindade } from "@/components/verum/Trindade";
import { Contact } from "@/components/verum/Contact";
import { Footer } from "@/components/verum/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Verum — A Inteligência da Coerência" },
      {
        name: "description",
        content:
          "Verum detecta incoerências comportamentais em redes de pequenas empresas. IA de cibersegurança que vigia o que não faz sentido — antes do prejuízo.",
      },
      { property: "og:title", content: "Verum — A Inteligência da Coerência" },
      {
        property: "og:description",
        content: "IA que detecta intenções suspeitas antes do prejuízo acontecer.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <StatBanner />
      <Trindade />
      <Contact />
      <Footer />
    </main>
  );
}
