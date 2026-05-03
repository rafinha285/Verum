import { useState } from "react";
import { Send, Mail, Link2, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { DashboardPanel, TerminalPanel } from "@/components/verum/Terminal";

const contacts = [
  { icon: Mail,    text: "contato@verum.security" },
  { icon: Link2,   text: "linkedin.com/company/verum" },
  { icon: MapPin,  text: "São Paulo · Brasil" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contato" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl space-y-12">

        {/* ── Top header ── */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            // entre em contato
          </p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Vamos vigiar o que <span className="text-primary">não faz sentido</span> na sua rede.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Solicite uma demo. Resposta em até 24h úteis com um diagnóstico inicial gratuito.
          </p>
        </div>

        {/* ── Main grid: [Dashboard + Terminal] | [Form] ── */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* Left column: Dashboard on top, Terminal below */}
          <div className="flex flex-col gap-6">
            <DashboardPanel />
            <TerminalPanel />
          </div>

          {/* Right column: Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 4000);
            }}
            className="glass space-y-5 rounded-2xl p-7 md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Nome</Label>
                <Input id="name" required placeholder="Seu nome" className="bg-background/40" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">E-mail</Label>
                <Input id="email" type="email" required placeholder="voce@empresa.com" className="bg-background/40" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Empresa</Label>
              <Input id="company" required placeholder="Nome da empresa" className="bg-background/40" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="msg" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Mensagem</Label>
              <Textarea id="msg" required rows={6} placeholder="Conte um pouco sobre seu cenário..." className="bg-background/40" />
            </div>

            <Button type="submit" size="lg" className="glow-primary w-full font-semibold">
              {sent ? (<><CheckCircle2 className="h-4 w-4" /> Recebido — em breve falaremos</>) : (<>Enviar mensagem <Send className="h-4 w-4" /></>)}
            </Button>
          </form>
        </div>

        {/* ── Contact info below everything ── */}
        <div className="border-t border-border/60 pt-8">
          <ul className="flex flex-wrap gap-x-10 gap-y-4">
            {contacts.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-sm">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 ring-1 ring-primary/30">
                  <Icon className="h-4 w-4 text-primary" />
                </span>
                <span className="font-mono text-muted-foreground">{text}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
