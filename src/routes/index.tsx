import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Instagram,
  MapPin,
  Play,
  Scale,
  Briefcase,
  Users,
  FileSignature,
  ShieldCheck,
  Phone,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const WHATSAPP = "https://wa.me/5598991225745";
const INSTAGRAM = "https://www.instagram.com/luanadiogoadvocacia/";
const YOUTUBE = "https://www.youtube.com/@PODCASTFALADOUTORA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luana Diogo & Advogados | Escritório de Advocacia em Santa Inês - MA" },
      {
        name: "description",
        content:
          "Escritório de advocacia fundado em 2014, em Santa Inês - MA. Direito Previdenciário, Trabalhista, de Família e Contratual com atuação em todo o território nacional.",
      },
      { property: "og:title", content: "Luana Diogo & Advogados | Advocacia em Santa Inês - MA" },
      {
        property: "og:description",
        content:
          "Atendimento humano e técnico em Direito Previdenciário, Trabalhista, de Família e Contratual. Fale conosco pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const areas = [
  {
    icon: ShieldCheck,
    title: "Direito Previdenciário",
    text: "Aposentadorias, auxílios, BPC/LOAS e revisões junto ao INSS, do requerimento à decisão judicial.",
  },
  {
    icon: Briefcase,
    title: "Direito Trabalhista",
    text: "Verbas rescisórias, reconhecimento de vínculo, horas extras e defesa de empregados e empresas.",
  },
  {
    icon: Users,
    title: "Direito de Família",
    text: "Divórcio, guarda, pensão alimentícia, inventário e partilha com condução discreta e sensível.",
  },
  {
    icon: FileSignature,
    title: "Direito Contratual",
    text: "Elaboração, revisão e discussão judicial de contratos, com foco em segurança jurídica.",
  },
];

const team = [
  { name: "Dra. Luana Diogo", role: "Advogada fundadora", img: "/images/luana.jpg" },
  { name: "Dra. Rayane Barros", role: "Advogada", img: "/images/rayane.jpg" },
  { name: "Dr. Italo Nascimento", role: "Advogado", img: "/images/italo.jpg" },
  { name: "Dr. Felipe Carvalho", role: "Advogado", img: "/images/felipe.jpg" },
  { name: "Dr. Victor Hugo", role: "Advogado", img: "/images/victor.jpg" },
];

function Index() {
  useReveal();

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#topo" className="leading-none">
            <span className="block font-display text-lg font-extrabold tracking-tight text-primary">
              Luana Diogo
            </span>
            <span className="block text-[0.6rem] tracking-[0.42em] text-muted-foreground">
              &amp; ADVOGADOS
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            {[
              ["Atuação", "#atuacao"],
              ["Escritório", "#escritorio"],
              ["Advogados", "#advogados"],
              ["Podcast", "#podcast"],
              ["Contato", "#contato"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="relative transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-primary hover:after:w-full"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram do escritório"
              className="grid size-10 place-items-center rounded-full border border-border text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-soft"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="gradient-primary hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
            >
              <Phone className="size-4" /> Fale conosco
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="topo" className="relative px-5 pb-24 pt-36 md:pb-32 md:pt-44">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-24 size-[36rem] rounded-full bg-primary/10 blur-3xl"
        />
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
          <div data-reveal className="reveal">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs tracking-[0.2em] text-primary uppercase">
              <Scale className="size-3.5" /> Desde 2014
            </p>
            <h1 className="font-display text-4xl leading-[1.05] font-light text-primary sm:text-5xl md:text-6xl">
              Escritório
              <span className="mt-1 block text-5xl font-extrabold sm:text-6xl md:text-7xl">
                Luana Diogo
              </span>
              <span className="mt-2 block text-sm tracking-[0.55em] text-muted-foreground">
                &amp; ADVOGADOS
              </span>
            </h1>
            <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground">
              Escritório de advocacia com sede em Santa Inês - MA, formado por profissionais
              especializados e comprometidos com cada história que chega até nós.
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              Processos ativos no Maranhão, Piauí, Pará e São Paulo, com capacidade para atuar em
              todo o território nacional.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="gradient-primary group inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-medium text-primary-foreground shadow-elegant transition-transform duration-300 hover:-translate-y-1"
              >
                Fale conosco
                <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#atuacao"
                className="text-sm font-medium text-primary underline-offset-8 transition-all duration-300 hover:underline"
              >
                Áreas de atuação
              </a>
            </div>
          </div>

          <div data-reveal className="reveal relative mx-auto w-full max-w-md">
            <div
              aria-hidden
              className="gradient-deep absolute inset-6 rounded-full blur-2xl opacity-30"
            />
            <img
              src="/images/luana-hero.png"
              alt="Dra. Luana Diogo, advogada fundadora do escritório"
              className="relative z-10 w-full rounded-full shadow-elegant"
              style={{ animation: "float-slow 7s ease-in-out infinite" }}
              width={900}
              height={900}
            />
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="gradient-deep px-5 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 text-center sm:grid-cols-3">
          {[
            ["+10 anos", "de atuação desde 2014"],
            ["4 estados", "MA, PI, PA e SP"],
            ["5 advogados", "equipe especializada"],
          ].map(([big, small]) => (
            <div key={big} data-reveal className="reveal">
              <p className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
                {big}
              </p>
              <p className="mt-1 text-sm text-primary-foreground/70">{small}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Atuação */}
      <section id="atuacao" className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <div data-reveal className="reveal max-w-xl">
            <span className="text-xs tracking-[0.35em] text-muted-foreground uppercase">
              Atuação
            </span>
            <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              Áreas em que cuidamos do seu caso
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {areas.map((area, i) => (
              <article
                key={area.title}
                data-reveal
                className="reveal group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-elegant"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div
                  aria-hidden
                  className="gradient-primary absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                />
                <span className="gradient-primary grid size-12 place-items-center rounded-2xl text-primary-foreground shadow-soft">
                  <area.icon className="size-5" />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-primary">{area.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Escritório */}
      <section id="escritorio" className="bg-secondary px-5 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
          <div data-reveal className="reveal">
            <span className="text-xs tracking-[0.35em] text-muted-foreground uppercase">
              Escritório
            </span>
            <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              Técnica, proximidade e transparência
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Fundado em 2014, o Luana Diogo &amp; Advogados nasceu para oferecer uma advocacia
              acessível e séria no interior do Maranhão. Hoje reúne profissionais de diferentes
              especialidades para acompanhar cada processo de perto.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Você recebe orientação clara sobre prazos, possibilidades e próximos passos — sem
              promessas vazias.
            </p>
            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft">
              <MapPin className="size-5 shrink-0 text-primary" />
              <p className="text-sm text-muted-foreground">
                <strong className="text-primary">Sede:</strong> Santa Inês - Maranhão · atendimento
                presencial e on-line para todo o Brasil.
              </p>
            </div>
          </div>
          <div data-reveal className="reveal grid grid-cols-2 gap-4">
            <img
              src="/images/rayane.jpg"
              alt="Advogada do escritório no ambiente de atendimento"
              className="mt-8 aspect-[3/4] w-full rounded-3xl object-cover shadow-soft"
              loading="lazy"
            />
            <img
              src="/images/luana.jpg"
              alt="Dra. Luana Diogo no escritório"
              className="aspect-[3/4] w-full rounded-3xl object-cover shadow-soft"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Advogados */}
      <section id="advogados" className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <div data-reveal className="reveal max-w-xl">
            <span className="text-xs tracking-[0.35em] text-muted-foreground uppercase">
              Advogados
            </span>
            <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              Quem vai cuidar do seu processo
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {team.map((member, i) => (
              <figure
                key={member.name}
                data-reveal
                className="reveal group relative overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-elegant"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <img
                  src={member.img}
                  alt={`Retrato de ${member.name}`}
                  className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <figcaption className="gradient-deep absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-95 transition-transform duration-500 group-hover:translate-y-0">
                  <p className="text-sm font-semibold text-primary-foreground">{member.name}</p>
                  <p className="text-xs text-primary-foreground/70">{member.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast */}
      <section id="podcast" className="px-5 pb-24">
        <div
          data-reveal
          className="reveal gradient-deep mx-auto grid max-w-6xl items-center gap-10 overflow-hidden rounded-[2.5rem] p-8 shadow-elegant md:grid-cols-2 md:p-14"
        >
          <div>
            <span className="text-xs tracking-[0.35em] text-primary-foreground/60 uppercase">
              Podcast
            </span>
            <h2 className="mt-3 text-3xl font-bold text-primary-foreground md:text-4xl">
              Fala, Doutora!
            </h2>
            <p className="mt-5 leading-relaxed text-primary-foreground/75">
              Direito descomplicado em episódios curtos: previdenciário, trabalhista, família e
              contratos explicados em linguagem simples.
            </p>
            <a
              href={YOUTUBE}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-medium text-primary transition-transform duration-300 hover:-translate-y-1"
            >
              <Play className="size-4 transition-transform duration-300 group-hover:scale-110" />
              Assista agora
            </a>
          </div>
          <img
            src="/images/podcast.jpg"
            alt="Capa do podcast Fala Doutora"
            className="w-full rounded-3xl shadow-elegant"
            loading="lazy"
          />
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="px-5 pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1.2fr_1fr]">
          <div
            data-reveal
            className="reveal rounded-[2rem] border border-border bg-card p-10 shadow-soft"
          >
            <h2 className="text-3xl font-bold text-primary">Vamos conversar sobre o seu caso</h2>
            <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
              Envie uma mensagem no WhatsApp e conte a sua situação. Retornamos com os próximos
              passos e as possibilidades jurídicas do seu caso.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-whatsapp px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-transform duration-300 hover:-translate-y-1"
              >
                <Phone className="size-4" /> (98) 99122-5745
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-primary transition-all duration-300 hover:-translate-y-1 hover:border-primary"
              >
                <Instagram className="size-4" /> @luanadiogoadvocacia
              </a>
            </div>
          </div>

          <div
            data-reveal
            className="reveal overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft"
          >
            <iframe
              title="Localização do escritório em Santa Inês - MA"
              src="https://www.google.com/maps?q=Santa%20In%C3%AAs%20-%20MA&output=embed"
              loading="lazy"
              className="h-64 w-full border-0 md:h-full"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-display font-bold text-primary">Luana Diogo &amp; Advogados</p>
            <p className="text-xs text-muted-foreground">Santa Inês - MA · Desde 2014</p>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} · Todos os direitos reservados
          </p>
        </div>
      </footer>

      {/* WhatsApp flutuante */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid size-14 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-elegant transition-transform duration-300 hover:scale-110"
      >
        <Phone className="size-6" />
      </a>
    </div>
  );
}
