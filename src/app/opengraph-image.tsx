import { ImageResponse } from 'next/og'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          background:
            'radial-gradient(circle at top, rgba(255,140,50,0.22), transparent 28%), linear-gradient(180deg, #090911 0%, #0d0e16 100%)',
          color: '#f1ece3',
          padding: '72px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 32,
            borderRadius: 36,
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ fontSize: 24, letterSpacing: '0.22em', fontWeight: 700 }}>
              copete<span style={{ color: '#ff8c32' }}>.app</span>
            </div>
            <div
              style={{
                borderRadius: 999,
                border: '1px solid rgba(255,140,50,0.2)',
                background: 'rgba(255,140,50,0.12)',
                color: '#ff8c32',
                fontSize: 18,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                padding: '10px 18px',
              }}
            >
              próximamente
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 28, maxWidth: 900 }}>
            <div style={{ fontSize: 82, fontWeight: 700, lineHeight: 0.95 }}>
              La noche tiene nuevo punto de encuentro.
            </div>
            <div style={{ fontSize: 28, lineHeight: 1.5, color: '#b2aa9d', maxWidth: 900 }}>
              Estamos llegando para conectar botillerías, delivery, beneficios y experiencias en una plataforma pensada para cómo realmente se mueve la noche en Chile.
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
              fontSize: 22,
            }}
          >
            {['Botillerías', 'Delivery', 'Beneficios', 'Cultura'].map((item) => (
              <div
                key={item}
                style={{
                  borderRadius: 999,
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)',
                  padding: '12px 20px',
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  )
}
