import { z } from 'zod'

const emailSchema = z.email('Ingresa un correo válido')

export const leadSchema = z
  .discriminatedUnion('leadType', [
    z.object({
      leadType: z.literal('user'),
      email: emailSchema,
      website: z.string().optional(),
    }),
    z.object({
      leadType: z.literal('business'),
      businessName: z.string().min(2, 'Ingresa el nombre del negocio'),
      commune: z.string().min(2, 'Ingresa la comuna'),
      whatsapp: z.string().min(6, 'Ingresa un WhatsApp válido'),
      email: emailSchema,
      website: z.string().optional(),
    }),
    z.object({
      leadType: z.literal('partner'),
      name: z.string().min(2, 'Ingresa tu nombre'),
      company: z.string().min(2, 'Ingresa la empresa'),
      role: z.string().min(2, 'Ingresa tu cargo'),
      email: emailSchema,
      message: z.string().min(10, 'Cuéntanos un poco más'),
      website: z.string().optional(),
    }),
  ])
  .refine((data) => !data.website, {
    message: 'No se pudo procesar el formulario',
    path: ['website'],
  })

export type LeadInput = z.infer<typeof leadSchema>
