'use client'

import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

type Props = {
  items: { slug: string }[]
}
export function Menu({ items }: Props) {
  const pathname = usePathname()
  const locale = useParams()?.locale

  return (
    <nav>
      <ul>
        {items.map(({ slug }) => {
          const href = `/${locale}/${slug}`

          return (
            <li key={slug}>
              <Link as={slug === 'home' ? `/${locale}` : undefined} href={href}>
                {slug}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
