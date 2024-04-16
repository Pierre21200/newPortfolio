import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import './globals.css'

const fira = Fira_Code({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pierre Potin Portfolio',
  description: 'Développeur Web Fullstack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={fira.className}>{children}</body>
    </html>
  )
}
