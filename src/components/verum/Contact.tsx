import { useState } from "react";
import { Send, Mail, Linkedin, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contato" className="relative px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            // entre em contato
          </p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Vamos vigiar o que <span className="text-primary">não faz sentido</span> na sua rede.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Solicite uma demo. Resposta em até 24h úteis com um diagnóstico inicial gratuito.
          </p>

          <ul className="mt-10 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 ring-1 ring-primary/30">
                <Mail className="h-4 w-4 text-primary" />
              </span>
              <span className="font-mono text-muted-foreground">contato@verum.security</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 ring-1 ring-primary/30">
                <Linkedin className="h-4 w-4 text-primary" />
              </span>
              <span className="font-mono text-muted-foreground">linkedin.com/company/verum</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 ring-1 ring-primary/30">
                <MapPin className="h-4 w-4 text-primary" />
              </span>
              <span className="font-mono text-muted-foreground">São Paulo · Brasil</span>
            </li>
          </ul>
        </div>

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
            <Textarea id="msg" required rows={5} placeholder="Conte um pouco sobre seu cenário..." className="bg-background/40" />
          </div>

          <Button type="submit" size="lg" className="glow-primary w-full font-semibold">
            {sent ? (<><CheckCircle2 className="h-4 w-4" /> Recebido — em breve falaremos</>) : (<>Enviar mensagem <Send className="h-4 w-4" /></>)}
          </Button>
        </form>
      </div>
    </section>
  );
}
