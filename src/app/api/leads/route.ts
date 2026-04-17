import { NextResponse } from 'next/server'

import { getSupabaseAdmin } from '@/lib/supabase-admin'
import { leadSchema } from '@/lib/validations'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = leadSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: parsed.error.issues[0]?.message ?? 'Datos inválidos',
        },
        { status: 400 }
      )
    }

    const lead = parsed.data
    const supabase = getSupabaseAdmin()

    const basePayload = {
      email: lead.email.trim().toLowerCase(),
      source: 'landing',
      utm_source: typeof body.utmSource === 'string' ? body.utmSource : null,
      utm_medium: typeof body.utmMedium === 'string' ? body.utmMedium : null,
      utm_campaign: typeof body.utmCampaign === 'string' ? body.utmCampaign : null,
      status: 'new',
    }

    const payload =
      lead.leadType === 'user'
        ? {
            ...basePayload,
            lead_type: 'user',
          }
        : lead.leadType === 'business'
          ? {
              ...basePayload,
              lead_type: 'business',
              business_name: lead.businessName.trim(),
              commune: lead.commune.trim(),
              whatsapp: lead.whatsapp.trim(),
            }
          : {
              ...basePayload,
              lead_type: 'partner',
              name: lead.name.trim(),
              company: lead.company.trim(),
              role: lead.role.trim(),
              message: lead.message.trim(),
            }

    const { error } = await supabase.from('launch_leads').insert(payload)

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json({ ok: true, duplicate: true })
      }

      return NextResponse.json(
        {
          ok: false,
          error: 'No se pudo guardar el registro',
        },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: 'Ocurrió un error inesperado',
      },
      { status: 500 }
    )
  }
}
