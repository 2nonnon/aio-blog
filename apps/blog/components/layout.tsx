import React from 'react'

import ScrollTop from './ScrollTop'
import DayAndNight from './DayAndNight'
import ToggleLocale from './toggleLocale'
import type { IconLinkProps } from './IconLink'
import IconLink from './IconLink'
import type { Dictionary, LocaleType } from '@/dictionaries'

export default function Layout({ children, dictionary, locale }: {
  children: React.ReactNode
  dictionary: Dictionary
  locale: LocaleType
}) {
  const currentLocale = locale
  const preUrl = currentLocale === 'en' ? '/' : `/${currentLocale}/`

  const copies = dictionary.layout

  const home: IconLinkProps = {
    title: copies.logo,
    name: copies.logo,
    href: preUrl,
    icon: 'material-symbols:home-outline-rounded',
  }

  const links: IconLinkProps[] = [
    {
      title: copies.blog,
      name: copies.blog,
      href: `${preUrl}posts`,
      icon: 'ri:article-line',
    },
    {
      title: copies.toy,
      name: copies.toy,
      href: `${preUrl}toys`,
      icon: 'tabler:horse-toy',
    },
    {
      title: 'Github',
      name: 'Github',
      href: 'https://github.com/2nonnon',
      icon: 'mingcute:github-line',
      target: '_blank',
    },
  ]

  return (
    <>
      <header className='flex items-center justify-between h-20 px-6 box-border max-w-screen-xl mx-auto w-full'>
        <IconLink {...home}></IconLink>
        <nav className='flex items-center gap-4' aria-label={copies.globalNav}>
          <ToggleLocale dictionary={dictionary} locale={locale}></ToggleLocale>
          {links.map(item => (<IconLink key={item.name} {...item}></IconLink>))}
          <DayAndNight></DayAndNight>
        </nav>
      </header>
      <main className='px-6 max-w-screen-xl box-border w-full mx-auto overflow-hidden flex-1 flex flex-col'>
        {children}
      </main>
      <ScrollTop content={copies.toTop}></ScrollTop>
    </>
  )
}
