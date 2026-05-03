import { TrendingDown, ShieldOff, Clock4, Users } from "lucide-react";

const rightStats = [
  {
    icon: ShieldOff,
    value: "68%",
    label: "não detectam invasões em tempo real",
  },
  {
    icon: Clock4,
    value: "287d",
    label: "tempo médio para descobrir uma brecha",
  },
  {
    icon: Users,
    value: "82%",
    label: "dos ataques vêm de dentro da rede",
  },
];

export function StatBanner() {
  return (
    <section className="relative px-6 py-12">
      <div className="mx-auto max-w-6xl flex flex-col gap-8">
        {/* First Block: Kaspersky Stat */}
        <div className="glass relative overflow-hidden rounded-2xl p-8 md:p-12 border border-destructive/20">
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-destructive/15 blur-3xl" />
          <div className="relative flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-destructive/15 ring-1 ring-destructive/40">
              <TrendingDown className="h-6 w-6 text-destructive" />
            </div>
            <div className="flex-1">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-destructive">
                Cenário de Ameaças
              </p>
              <p className="mt-3 text-2xl font-medium leading-snug text-foreground md:text-3xl">
                <span className="font-mono text-destructive">35%</span> das empresas brasileiras já sofreram com
                vazamento de dados, segundo a <span className="text-primary font-mono">Kaspersky</span>.
              </p>
              <p className="mt-4 text-sm text-muted-foreground border-t border-border/50 pt-4">
                <strong className="text-foreground">Kaspersky:</strong> Empresa global de segurança que reportou o índice de 35% de vazamentos em empresas brasileiras.
              </p>
            </div>
          </div>
        </div>

        {/* Second Block: Original Stats */}
        <div className="glass relative overflow-hidden rounded-2xl p-8 md:p-12 border border-destructive/20">
          <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-destructive/15 blur-3xl" />
          <div className="relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between">

            {/* Left: main stat */}
            <div className="flex items-start gap-5 md:max-w-[52%]">
              <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-destructive/15 ring-1 ring-destructive/40 md:flex">
                <TrendingDown className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-destructive">
                  Realidade do mercado BR
                </p>
                <p className="mt-3 text-2xl font-medium leading-snug text-foreground md:text-3xl">
                  Apenas <span className="font-mono text-primary">4%</span> das empresas brasileiras controlam
                  vazamentos de dados críticos.
                </p>
                <p className="mt-2 text-base text-muted-foreground md:text-lg">
                  Onde estão os seus outros <span className="font-mono text-destructive">96%</span>?
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden w-px self-stretch bg-border/60 md:block" />

            {/* Right: additional stats */}
            <div className="flex flex-col gap-5 md:min-w-[36%]">
              {rightStats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-destructive/10 ring-1 ring-destructive/30">
                    <Icon className="h-4 w-4 text-destructive" />
                  </span>
                  <div>
                    <span className="font-mono text-lg font-semibold text-foreground">{value}</span>
                    <span className="ml-2 text-sm text-muted-foreground">{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
