import GlobalStyles from '@/GlobalStyles'

import { Roboto } from 'next/font/google'


const font = Roboto({ subsets: ['latin'], weight: '400' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={font.className}>
      <body>
        <GlobalStyles />
        {children}
      </body>
    </html>
  )
}
