'use client'

import { useEffect, useMemo, useState, type FormEvent, type HTMLInputTypeAttribute } from 'react'

type LeadType = 'user' | 'business' | 'partner'
type SubmitState = 'idle' | 'loading' | 'success' | 'error'

type FormState = {
  email: string
  businessName: string
  commune: string
  whatsapp: string
  name: string
  company: string
  role: string
  message: string
  website: string
}

const initialState: FormState = {
  email: '',
  businessName: '',
  commune: '',
  whatsapp: '',
  name: '',
  company: '',
  role: '',
  message: '',
  website: '',
}

const typeOptions: { value: LeadType; label: string; hint: string }[] = [
  {
    value: 'user',
    label: 'Quiero acceso anticipado',
    hint: 'Para quienes quieren enterarse primero y recibir novedades.',
  },
  {
    value: 'business',
    label: 'Tengo un negocio',
    hint: 'Para botillerías, deliveries y comercios que quieran sumarse.',
  },
  {
    value: 'partner',
    label: 'Me interesa una alianza',
    hint: 'Para marcas, eventos, medios, aliados o socios estratégicos.',
  },
]

export function LeadForm() {
  const [leadType, setLeadType] = useState<LeadType>('user')
  const [form, setForm] = useState<FormState>(initialState)
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [feedback, setFeedback] = useState('')
  const [utm, setUtm] = useState({
    utmSource: '',
    utmMedium: '',
    utmCampaign: '',
  })

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)

    setUtm({
      utmSource: params.get('utm_source') ?? '',
      utmMedium: params.get('utm_medium') ?? '',
      utmCampaign: params.get('utm_campaign') ?? '',
    })
  }, [])

  const buttonLabel = useMemo(() => {
    if (leadType === 'business') return 'Quiero sumar mi negocio'
    if (leadType === 'partner') return 'Quiero conversar'
    return 'Quiero enterarme primero'
  }, [leadType])

  const activeHint = useMemo(
    () => typeOptions.find((option) => option.value === leadType)?.hint ?? '',
    [leadType]
  )

  function updateField(name: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [name]: value }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitState('loading')
    setFeedback('')

    const payload =
      leadType === 'user'
        ? {
            leadType,
            email: form.email,
            website: form.website,
            ...utm,
          }
        : leadType === 'business'
          ? {
              leadType,
              businessName: form.businessName,
              commune: form.commune,
              whatsapp: form.whatsapp,
              email: form.email,
              website: form.website,
              ...utm,
            }
          : {
              leadType,
              name: form.name,
              company: form.company,
              role: form.role,
              email: form.email,
              message: form.message,
              website: form.website,
              ...utm,
            }

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = (await response.json()) as {
        ok?: boolean
        duplicate?: boolean
        error?: string
      }

      if (!response.ok || !data.ok) {
        throw new Error(data.error ?? 'No se pudo enviar el formulario')
      }

      setSubmitState('success')
      setFeedback(
        data.duplicate
          ? 'Ese correo ya estaba registrado. Cuando tengamos novedades, te escribimos por ahí.'
          : 'Gracias por sumarte. Ya quedaste dentro.'
      )
      setForm(initialState)
      setLeadType('user')
    } catch (error) {
      setSubmitState('error')
      setFeedback(
        error instanceof Error ? error.message : 'No se pudo enviar el formulario.'
      )
    }
  }

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-1 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
      <div className="absolute inset-x-12 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,140,50,0.8),transparent)]" />
      <div className="rounded-[1.85rem] border border-white/6 bg-[rgba(14,14,22,0.92)] p-5 sm:p-7">
        <div className="grid gap-2 sm:grid-cols-3">
          {typeOptions.map((option) => {
            const isActive = option.value === leadType

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  setLeadType(option.value)
                  setSubmitState('idle')
                  setFeedback('')
                }}
                className={[
                  'rounded-2xl px-4 py-3 text-left text-sm transition',
                  isActive
                    ? 'bg-[var(--accent)] text-black shadow-[0_10px_30px_rgba(255,140,50,0.25)]'
                    : 'border border-white/8 bg-white/[0.03] text-[var(--foreground)] hover:bg-white/[0.06]',
                ].join(' ')}
              >
                <span className="block font-semibold leading-5">{option.label}</span>
              </button>
            )
          })}
        </div>

        <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{activeHint}</p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            value={form.website}
            onChange={(event) => updateField('website', event.target.value)}
          />

          {leadType === 'user' && (
            <Field
              label="Email"
              type="email"
              value={form.email}
              autoComplete="email"
              onChange={(value) => updateField('email', value)}
              placeholder="tu@email.com"
            />
          )}

          {leadType === 'business' && (
            <>
              <Field
                label="Nombre del negocio"
                value={form.businessName}
                onChange={(value) => updateField('businessName', value)}
                placeholder="Nombre de tu botillería o delivery"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Comuna"
                  value={form.commune}
                  onChange={(value) => updateField('commune', value)}
                  placeholder="Ej. Providencia"
                />
                <Field
                  label="WhatsApp"
                  type="tel"
                  value={form.whatsapp}
                  autoComplete="tel"
                  onChange={(value) => updateField('whatsapp', value)}
                  placeholder="+56 9 1234 5678"
                />
              </div>
              <Field
                label="Email"
                type="email"
                value={form.email}
                autoComplete="email"
                onChange={(value) => updateField('email', value)}
                placeholder="contacto@negocio.cl"
              />
            </>
          )}

          {leadType === 'partner' && (
            <>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Nombre"
                  value={form.name}
                  autoComplete="name"
                  onChange={(value) => updateField('name', value)}
                  placeholder="Tu nombre"
                />
                <Field
                  label="Cargo"
                  value={form.role}
                  onChange={(value) => updateField('role', value)}
                  placeholder="Tu cargo"
                />
              </div>
              <Field
                label="Empresa"
                value={form.company}
                onChange={(value) => updateField('company', value)}
                placeholder="Nombre de la empresa"
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                autoComplete="email"
                onChange={(value) => updateField('email', value)}
                placeholder="tu@email.com"
              />
              <Field
                label="Mensaje"
                value={form.message}
                onChange={(value) => updateField('message', value)}
                placeholder="Cuéntanos brevemente por qué te interesa conversar"
                textarea
              />
            </>
          )}

          <button
            type="submit"
            disabled={submitState === 'loading'}
            className="inline-flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[var(--accent-hover)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitState === 'loading' ? 'Enviando...' : buttonLabel}
          </button>

          <p className="text-xs leading-6 text-[var(--soft)]">
            No vamos a llenarte de mensajes. Solo te contactaremos cuando tenga sentido para tu perfil.
          </p>

          {feedback ? (
            <div
              className={[
                'rounded-2xl border px-4 py-3 text-sm leading-6',
                submitState === 'success'
                  ? 'border-emerald-400/20 bg-emerald-400/10 text-emerald-100'
                  : 'border-red-400/20 bg-red-400/10 text-red-100',
              ].join(' ')}
            >
              {feedback}
            </div>
          ) : null}
        </form>
      </div>
    </div>
  )
}

type FieldProps = {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder: string
  type?: HTMLInputTypeAttribute
  textarea?: boolean
  autoComplete?: string
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  textarea = false,
  autoComplete,
}: FieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-[var(--foreground)]">{label}</span>
      {textarea ? (
        <textarea
          value={value}
          autoComplete={autoComplete}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          rows={5}
          className="min-h-[8rem] w-full rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition placeholder:text-[var(--soft)] focus:border-[var(--accent)]/40 focus:bg-white/[0.05]"
          required
        />
      ) : (
        <input
          type={type}
          value={value}
          autoComplete={autoComplete}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="h-12 w-full rounded-2xl border border-white/8 bg-white/[0.03] px-4 text-sm text-[var(--foreground)] outline-none transition placeholder:text-[var(--soft)] focus:border-[var(--accent)]/40 focus:bg-white/[0.05]"
          required
        />
      )}
    </label>
  )
}
