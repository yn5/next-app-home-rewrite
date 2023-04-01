import './globals.css'
import { Menu } from '@/components/menu'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Menu items={[{ slug: 'home' }, { slug: 'about' }]} />
        {children}
      </body>
    </html>
  )
}
