import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="shell flex min-h-screen flex-col items-start justify-center gap-6 py-20">
      <p className="eyebrow">404</p>
      <h1 className="max-w-xl text-4xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl">
        Esta página no está disponible.
      </h1>
      <p className="max-w-xl text-base leading-8 text-[var(--muted)]">
        Puede que el enlace esté roto o que esta ruta todavía no exista.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[var(--accent-hover)]"
      >
        Volver al inicio
      </Link>
    </main>
  )
}
