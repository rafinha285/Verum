import { useEffect, useState } from "react";
import { Terminal as TerminalIcon, Activity, AlertOctagon, Users, Shield, Clock, Wifi } from "lucide-react";

type Line = { t: string; type: "ok" | "info" | "warn" | "err" };

export const sequence: Line[] = [
  { t: "$ verum --watch network/01", type: "info" },
  { t: "[10:42] OK  · usuário 'ana.lima' login (IP 192.168.0.14)", type: "ok" },
  { t: "[10:43] OK  · acesso /docs/financeiro · padrão coerente", type: "ok" },
  { t: "[10:45] OK  · 14 eventos analisados · 0 incoerências", type: "ok" },
  { t: "                                                              ", type: "info" },
  { t: "[03:00] ⚠  ALERTA: Incoerência Temporal detectada", type: "warn" },
  { t: "        ↳ usuário 'ana.lima' acessando /docs/financeiro", type: "err" },
  { t: "        ↳ horário fora do padrão · IP desconhecido (45.142.x.x)", type: "err" },
  { t: "        ↳ ação: sessão suspensa · responsável notificado", type: "err" },
];

const colors: Record<Line["type"], string> = {
  ok: "text-primary",
  info: "text-muted-foreground",
  warn: "text-destructive font-semibold",
  err: "text-destructive",
};

/* ── Dashboard metrics derived from terminal data ── */
const dashMetrics = [
  { icon: Users,        label: "Usuários monitorados", value: "1",          sub: "ana.lima ativo" },
  { icon: Activity,     label: "Eventos analisados",   value: "14",         sub: "ciclo atual" },
  { icon: Shield,       label: "Incoerências",          value: "0 → 1",     sub: "padrão quebrado" },
  { icon: AlertOctagon, label: "Alertas críticos",      value: "1",         sub: "Incoerência Temporal" },
  { icon: Wifi,         label: "IP suspeito",           value: "45.142.x.x", sub: "origem desconhecida" },
  { icon: Clock,        label: "Sessão suspensa",       value: "03:00",     sub: "fora do horário padrão" },
];

/* ── Standalone dashboard panel ── */
export function DashboardPanel() {
  return (
    <div className="glass overflow-hidden rounded-xl shadow-xl">
      <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <Activity className="h-3.5 w-3.5 text-primary" />
          verum-dashboard · network/01
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] text-primary ring-1 ring-primary/30">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          LIVE
        </span>
      </div>

      <div className="grid grid-cols-2 gap-px bg-border/40 sm:grid-cols-3">
        {dashMetrics.map(({ icon: Icon, label, value, sub }) => (
          <div
            key={label}
            className="flex flex-col gap-1 bg-[oklch(0.14_0.02_250)] p-4 transition-colors hover:bg-[oklch(0.16_0.03_250)]"
          >
            <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              <Icon className="h-3 w-3 text-primary/70" />
              {label}
            </div>
            <span className="mt-1 font-mono text-xl font-semibold text-foreground">{value}</span>
            <span className="font-mono text-[10px] text-muted-foreground/70">{sub}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Standalone terminal panel (animation only) ── */
export function TerminalPanel() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= sequence.length) {
      const t = setTimeout(() => setCount(0), 4500);
      return () => clearTimeout(t);
    }
    const delay = sequence[count].type === "warn" ? 900 : 550;
    const t = setTimeout(() => setCount((c) => c + 1), delay);
    return () => clearTimeout(t);
  }, [count]);

  return (
    <div className="glass overflow-hidden rounded-xl shadow-2xl">
      <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-destructive/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <span className="h-3 w-3 rounded-full bg-primary/70" />
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <TerminalIcon className="h-3.5 w-3.5" />
          verum-monitor — bash
        </div>
        <div className="w-12" />
      </div>

      <div className="min-h-[220px] bg-[oklch(0.14_0.02_250)] px-5 py-5 font-mono text-[13px] leading-relaxed">
        {sequence.slice(0, count).map((line, i) => (
          <div key={i} className={`${colors[line.type]} animate-[fade-in_0.25s_ease-out]`}>
            {line.t}
          </div>
        ))}
        {count < sequence.length && (
          <span className="inline-block h-4 w-2 translate-y-0.5 bg-primary animate-[blink_1s_step-end_infinite]" />
        )}
      </div>
    </div>
  );
}

/* ── Legacy export kept for backward compat (now unused) ── */
export function TerminalDemo() {
  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">// demonstração ao vivo</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Coerência em verde.
            <br />
            <span className="text-destructive">Incoerência em vermelho.</span>
          </h2>
        </div>
        <TerminalPanel />
      </div>
    </section>
  );
}
