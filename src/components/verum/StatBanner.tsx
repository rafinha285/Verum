import { TrendingDown } from "lucide-react";

export function StatBanner() {
  return (
    <section className="relative px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="glass relative overflow-hidden rounded-2xl p-8 md:p-12">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-destructive/15 blur-3xl" />
          <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-5">
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
          </div>
        </div>
      </div>
    </section>
  );
}
