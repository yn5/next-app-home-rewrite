export function generateStaticParams() {
  return [
    { locale: 'en', slug: 'home' },
    { locale: 'en', slug: 'about' },
  ]
}

type StaticParamsResult = ReturnType<typeof generateStaticParams>[number]

type Props = {
  params: StaticParamsResult
}

export default async function SlugPage({ params }: Props) {
  const { locale, slug } = params

  return (
    <h1>
      /{locale}/{slug}
    </h1>
  )
}
