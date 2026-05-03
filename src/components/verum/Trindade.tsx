import { EyeOff, AlertTriangle, Banknote } from "lucide-react";

const cards = [
  {
    icon: EyeOff,
    tag: "A Dor",
    title: "Vulnerabilidade invisível",
    desc: "Falta de fiscalização contínua. O que você não vê hoje, vira manchete amanhã.",
  },
  {
    icon: AlertTriangle,
    tag: "O Problema",
    title: "Acessos incoerentes",
    desc: "Ações suspeitas e padrões fora do comum que passam totalmente despercebidos.",
  },
  {
    icon: Banknote,
    tag: "O Impacto",
    title: "Prejuízo direto",
    desc: "Perda financeira, multas regulatórias e vazamento de dados sigilosos.",
  },
];

export function Trindade() {
  return (
    <section id="tecnologia" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            // a trindade do problema
          </p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Três frentes silenciosas.
            <br />
            <span className="text-muted-foreground">Um único ponto cego.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map(({ icon: Icon, tag, title, desc }, i) => (
            <article
              key={tag}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-7 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-card/70"
              style={{ animation: `slide-up 0.6s cubic-bezier(0.16,1,0.3,1) both`, animationDelay: `${i * 120}ms` }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {tag}
              </p>
              <h3 className="mt-2 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
