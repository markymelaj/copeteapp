import { BrandMark } from '@/components/brand-mark'
import { LeadForm } from '@/components/lead-form'
import { siteConfig } from '@/lib/site'

const pillars = [
  {
    title: 'Botillerías con identidad propia',
    text: 'Cada negocio mantiene su nombre, su estilo y la relación con su gente. La tecnología acompaña, no reemplaza.',
  },
  {
    title: 'Una experiencia más actual',
    text: 'Descubrir opciones, acceder a beneficios y conectar con lo que pasa cerca tuyo debería sentirse simple, claro y atractivo.',
  },
  {
    title: 'Más que delivery',
    text: 'copete app también mira hacia alianzas, eventos, cultura y nuevas formas de activar la noche desde una misma plataforma.',
  },
] as const

const audiences = [
  {
    title: 'Público general',
    text: 'Descubre antes, accede a beneficios y entérate primero de lo que viene.',
  },
  {
    title: 'Botillerías y deliveries',
    text: 'Una presencia más atractiva, más actual y mejor conectada con quienes ya quieren comprar.',
  },
  {
    title: 'Marcas, eventos y aliados',
    text: 'Una nueva puerta para activar colaboraciones, beneficios y cruces reales con entretenimiento y cultura.',
  },
] as const

const highlights = [
  'Botillerías',
  'Delivery',
  'Beneficios',
  'Cultura',
] as const

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden">
      <section className="shell min-h-screen pb-14 pt-6 sm:pb-[4.5rem] lg:pb-20">
        <header className="flex items-center justify-between py-4">
          <BrandMark className="text-sm text-[var(--foreground)]" />
          <nav className="hidden items-center gap-7 text-sm text-[var(--muted)] md:flex">
            <a href="#vision" className="transition hover:text-[var(--foreground)]">
              Visión
            </a>
            <a href="#para-quien" className="transition hover:text-[var(--foreground)]">
              Perfiles
            </a>
            <a href="#registro" className="transition hover:text-[var(--foreground)]">
              Registro
            </a>
          </nav>
          <a
            href="#registro"
            className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-sm text-[var(--foreground)] transition hover:border-[var(--accent)]/40 hover:bg-white/[0.05]"
          >
            Acceso anticipado
          </a>
        </header>

        <div className="grid min-h-[calc(100vh-6rem)] items-center gap-12 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-[4.5rem] lg:py-14">
          <div className="relative max-w-3xl">
            <div className="absolute -left-12 top-3 hidden h-40 w-40 rounded-full bg-[var(--accent)]/12 blur-3xl lg:block" />

            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/[0.03] px-3 py-1.5 text-xs text-[var(--muted)] backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--accent)]" />
              Próximamente en Chile
            </div>

            <h1 className="mt-6 max-w-4xl text-[3rem] font-semibold leading-[0.92] tracking-[-0.05em] text-[var(--foreground)] sm:text-[4.4rem] lg:text-[5.5rem]">
              La noche tiene nuevo punto de encuentro.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              Estamos llegando para conectar botillerías, delivery, beneficios y experiencias en una plataforma pensada para cómo realmente se mueve la noche en Chile.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-[var(--foreground)]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#registro"
                className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[var(--accent-hover)]"
              >
                Quiero enterarme primero
              </a>
              <a
                href="#registro"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)]/40 hover:bg-white/[0.05]"
              >
                Tengo un negocio
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                ['Identidad propia', 'para cada negocio'],
                ['Beneficios reales', 'para quienes llegan primero'],
                ['Cultura y noche', 'como parte del crecimiento'],
              ].map(([strong, soft]) => (
                <div
                  key={strong}
                  className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] px-5 py-4 backdrop-blur"
                >
                  <p className="text-sm font-semibold text-[var(--foreground)]">{strong}</p>
                  <p className="mt-1 text-sm text-[var(--soft)]">{soft}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute inset-x-10 top-8 h-24 rounded-full bg-[var(--accent)]/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-1 shadow-[0_32px_100px_rgba(0,0,0,0.45)]">
              <div className="rounded-[2rem] border border-white/6 bg-[linear-gradient(180deg,rgba(13,13,21,0.96),rgba(10,10,16,0.98))] p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <BrandMark className="text-[13px] text-[var(--foreground)]" />
                    <p className="mt-4 max-w-xs text-2xl font-semibold leading-tight text-[var(--foreground)]">
                      Una marca nueva para una noche que ya se mueve.
                    </p>
                  </div>
                  <div className="rounded-full border border-[var(--accent)]/20 bg-[var(--accent-soft)] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
                    llegando
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  {[
                    'Descubre opciones con una presencia más atractiva.',
                    'Súmate antes para recibir novedades y beneficios.',
                    'Abre la puerta a alianzas, cultura y activaciones.',
                  ].map((text) => (
                    <div
                      key={text}
                      className="flex items-start gap-3 rounded-[1.35rem] border border-white/8 bg-white/[0.03] px-4 py-4"
                    >
                      <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      <p className="text-sm leading-6 text-[var(--foreground)]">{text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/8 bg-black/20 p-4">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--soft)]">
                      para personas
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--foreground)]">
                      Beneficios, lanzamientos y una forma más actual de descubrir.
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/8 bg-black/20 p-4">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--soft)]">
                      para negocios
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--foreground)]">
                      Más presencia, mejor vitrina y una marca con la que vale la pena aparecer.
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-[1.6rem] border border-[var(--accent)]/18 bg-[linear-gradient(135deg,rgba(255,140,50,0.14),rgba(255,140,50,0.04))] px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
                    Hecho en Chile
                  </p>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-[var(--foreground)]">
                    Pensado para cómo se vive la noche y para todo lo que puede pasar alrededor de ella.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shell section-space" id="vision">
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow">Propuesta</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl">
            Más que pedir. Más que vender.
          </h2>
          <p className="mt-4 text-base leading-8 text-[var(--muted)]">
            copete app nace para acercar negocios, personas y oportunidades alrededor de la noche con una presencia más actual, una marca más atractiva y una base lista para crecer bien.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/8 bg-white/[0.03] p-6 transition hover:-translate-y-0.5 hover:border-[var(--accent)]/18"
            >
              <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,140,50,0.85),transparent)] opacity-0 transition group-hover:opacity-100" />
              <h3 className="text-xl font-semibold text-[var(--foreground)]">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell section-space border-y border-white/6" aria-labelledby="contexto-title">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="eyebrow">Contexto</p>
            <h2
              id="contexto-title"
              className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl"
            >
              La noche se mueve distinto.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-[var(--muted)]">
            <p>
              Muchas botillerías y deliveries ya tienen clientes, movimiento y valor real, pero todavía no cuentan con una presencia digital a la altura.
            </p>
            <p>
              Al mismo tiempo, las personas buscan algo más simple, más claro y más atractivo para descubrir opciones, beneficios y novedades cerca suyo.
            </p>
            <p className="text-[var(--foreground)]">
              copete app está llegando para unir mejor esos mundos.
            </p>
          </div>
        </div>
      </section>

      <section className="shell section-space" id="para-quien">
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow">Perfiles</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl">
            Pensado para quienes hacen y viven la noche.
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {audiences.map((audience, index) => (
            <article
              key={audience.title}
              className="overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]"
            >
              <div className="flex items-center justify-between border-b border-white/6 px-6 py-4">
                <p className="text-sm font-semibold text-[var(--foreground)]">{audience.title}</p>
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--soft)]">
                  0{index + 1}
                </span>
              </div>
              <div className="px-6 py-5">
                <p className="text-sm leading-7 text-[var(--muted)]">{audience.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="shell section-space" id="registro">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div>
            <p className="eyebrow">Registro</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl">
              Súmate antes del lanzamiento.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-8 text-[var(--muted)]">
              Déjanos tus datos y te contactaremos según tu perfil. La idea es simple: entrar con una marca fuerte, detectar interés real y abrir conversaciones desde ahora.
            </p>

            <div className="mt-8 space-y-4">
              {[
                'Lista de acceso anticipado para público general.',
                'Registro diferenciado para negocios y potenciales alianzas.',
                'Base lista para trabajar mailing, seguimiento y primeros contactos.',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-7 text-[var(--muted)]">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <LeadForm />
        </div>
      </section>

      <section className="shell section-space">
        <div className="overflow-hidden rounded-[2.25rem] border border-white/8 bg-[linear-gradient(135deg,rgba(255,140,50,0.14),rgba(255,140,50,0.04))] px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
          <p className="eyebrow text-black/80">Cierre</p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-black sm:text-4xl">
                Esto recién empieza.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-black/75">
                Estamos construyendo una marca y una plataforma con visión de largo plazo para conectar negocios, beneficios, experiencias y nuevas formas de vivir la noche.
              </p>
            </div>
            <div className="lg:text-right">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/90"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="shell pb-10 pt-2">
        <div className="flex flex-col gap-6 border-t border-white/6 pt-8 md:flex-row md:items-end md:justify-between">
          <div>
            <BrandMark className="text-sm text-[var(--foreground)]" />
            <p className="mt-3 text-sm text-[var(--foreground)]">Próximamente en Chile.</p>
            <p className="mt-2 max-w-2xl text-xs leading-6 text-[var(--soft)]">
              copete app es una plataforma en desarrollo. La venta y entrega de bebidas alcohólicas será realizada únicamente por comercios habilitados y solo para mayores de 18 años.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm text-[var(--muted)]">
            <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="transition hover:text-[var(--foreground)]">
              Instagram
            </a>
            <a href={siteConfig.tiktok} target="_blank" rel="noreferrer" className="transition hover:text-[var(--foreground)]">
              TikTok
            </a>
            <a href={`mailto:${siteConfig.email}`} className="transition hover:text-[var(--foreground)]">
              {siteConfig.email}
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
