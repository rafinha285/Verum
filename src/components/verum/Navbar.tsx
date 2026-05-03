import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 glass">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/15 ring-1 ring-primary/40 transition-all group-hover:ring-primary">
            <ShieldCheck className="h-4 w-4 text-primary" />
          </div>
          <span className="font-mono text-base font-semibold tracking-tight">
            Verum<span className="text-primary">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <li><a href="#top" className="transition-colors hover:text-foreground">Início</a></li>
          <li><a href="#tecnologia" className="transition-colors hover:text-foreground">Tecnologia</a></li>
          <li><a href="#contato" className="transition-colors hover:text-foreground">Contato</a></li>
        </ul>

        <Button asChild variant="default" size="sm" className="font-medium">
          <a href="#contato">Solicitar Demo</a>
        </Button>
      </nav>
    </header>
  );
}
