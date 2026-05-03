import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28">
      <div className="absolute inset-0 dot-grid opacity-60" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute left-1/2 top-24 -z-10 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center animate-[fade-in_0.8s_ease-out]">

        <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          <span className="text-gradient">Verum:</span>
          <br />
          A Inteligência da Segurança.
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl">
          Sistemas comuns barram vírus. <span className="text-foreground">Nós detectamos intenções suspeitas</span> antes que o prejuízo aconteça.
        </p>


        <p className="mt-10 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
          // monitoramento contínuo · alertas em tempo real · zero ruído
        </p>
      </div>
    </section>
  );
}
