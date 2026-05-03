import { useState, type FormEvent } from "react";
import { Send, Mail, Link2, MapPin, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { DashboardPanel, TerminalPanel } from "@/components/verum/Terminal";
import { supabase } from "@/lib/supabase";
import agentVideo from "@/assets/agent-auto-video_segment_1.gif";

const contacts = [
  { icon: Mail,    text: "contato@verum.security" },
  { icon: Link2,   text: "linkedin.com/company/verum" },
  { icon: MapPin,  text: "São Paulo · Brasil" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error: insertError } = await supabase
      .from("client_information")
      .insert({
        name,
        email,
        company_name: companyName,
        message,
      });

    setLoading(false);

    if (insertError) {
      setError("Erro ao enviar mensagem. Tente novamente.");
      console.error("Supabase insert error:", insertError);
      return;
    }

    setSent(true);
    setName("");
    setEmail("");
    setCompanyName("");
    setMessage("");
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section className="relative px-6 pt-16 pb-8">
      <div className="mx-auto max-w-6xl space-y-8">

        {/* ── Video/GIF Area ── */}
        <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-border/50 bg-black/20">
          <img 
            src={agentVideo} 
            alt="Verum Agent Analysis" 
            className="w-full h-auto max-h-[400px] object-cover mix-blend-screen opacity-90"
          />
        </div>

        {/* ── Dashboard before the header ── */}
        <DashboardPanel />

        {/* ── Header ── */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            // entre em contato
          </p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Vamos monitorar o que <span className="text-primary">traz risco</span> à sua rede e garantir sua segurança.
          </h2>

        </div>

        {/* ── Main grid: [Terminal] | [Form] ── */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">

          {/* Left column: Terminal */}
          <TerminalPanel className="h-full" />

          {/* Right column: Form */}
          <form
            onSubmit={handleSubmit}
            className="glass space-y-5 rounded-2xl p-7 md:p-8"
            id="contato"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Nome</Label>
                <Input id="name" required placeholder="Seu nome" className="bg-background/40" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">E-mail</Label>
                <Input id="email" type="email" required placeholder="voce@empresa.com" className="bg-background/40" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Empresa</Label>
              <Input id="company" required placeholder="Nome da empresa" className="bg-background/40" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="msg" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Mensagem</Label>
              <Textarea id="msg" required rows={6} placeholder="Conte um pouco sobre seu cenário..." className="bg-background/40" value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>

            {error && (
              <p className="flex items-center gap-2 text-sm text-red-400">
                <AlertCircle className="h-4 w-4" /> {error}
              </p>
            )}

            <Button type="submit" size="lg" className="glow-primary w-full font-semibold" disabled={loading || sent}>
              {loading ? (
                <><Loader2 className="h-4 w-4 animate-spin" /> Enviando...</>
              ) : sent ? (
                <><CheckCircle2 className="h-4 w-4" /> Recebido — em breve falaremos</>
              ) : (
                <>Enviar mensagem <Send className="h-4 w-4" /></>
              )}
            </Button>
          </form>
        </div>

        {/* ── Contact info below everything (centered) ── */}
        <div className="border-t border-border/60 pt-8">
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
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
