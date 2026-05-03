import { ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-primary" />
          <span className="font-mono">Verum © {new Date().getFullYear()} — A inteligência da coerência.</span>
        </div>
        <div className="flex gap-6 font-mono text-xs uppercase tracking-wider">
          <a href="#top" className="hover:text-foreground transition-colors">Início</a>
          <a href="#tecnologia" className="hover:text-foreground transition-colors">Tecnologia</a>
          <a href="#contato" className="hover:text-foreground transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  );
}
