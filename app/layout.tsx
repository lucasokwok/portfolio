import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
})

export const metadata: Metadata = {
  title: 'Lucas Okwok | Full Stack Developer',
  description: 'Full Stack Developer com experiencia em aplicacoes corporativas, automacoes, analise de dados e interfaces web modernas. React, TypeScript, Python, Power BI.',
  keywords: ['Full Stack Developer', 'React', 'TypeScript', 'Python', 'Power BI', 'Automacao', 'Data Analysis'],
  authors: [{ name: 'Lucas Okwok' }],
  openGraph: {
    title: 'Lucas Okwok | Full Stack Developer',
    description: 'Full Stack Developer com experiencia em aplicacoes corporativas, automacoes, analise de dados e interfaces web modernas.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucas Okwok | Full Stack Developer',
    description: 'Full Stack Developer com experiencia em aplicacoes corporativas, automacoes e analise de dados.',
  },
}

export const viewport = {
  themeColor: '#050608',
  colorScheme: 'dark' as const,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
