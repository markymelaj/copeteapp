import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'copete app',
    short_name: 'copete app',
    description:
      'Landing de pre-lanzamiento de copete app: botillerías, delivery, beneficios y experiencias.',
    start_url: '/',
    display: 'standalone',
    background_color: '#090911',
    theme_color: '#090911',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
