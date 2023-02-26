import type { JSX } from 'preact/jsx-runtime'

export const Header = (): JSX.Element => {
  type MenuItemType = { title: string; path: string }
  const menuItems: MenuItemType[] = [
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Blog',
      path: '/blog',
    },
  ]
  return (
    <header>
      <a href="/" class="text-lg">
        <span class="font-bold text-slate-800">namikinokurage</span>
        <span class="text-slate-500">.dev</span>
      </a>
      <nav>
        {menuItems.map((item) => (
          <a href={item.path}>{item.title}</a>
        ))}
      </nav>
    </header>
  )
}
