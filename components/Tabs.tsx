// components/Tabs.tsx
import Link from 'next/link'
import clsx from 'clsx'

export type TabItem = {
  id: string
  label: string
  href: string
}

type TabsProps = {
  items: TabItem[]
  current: string
}

export default function Tabs({ items, current }: TabsProps) {
  return (
    <div className="flex gap-2">
      {items.map(item => (
        <Link
          key={item.id}
          href={item.href} // string type is guaranteed
          className={clsx(
            'px-3 py-1 rounded-2xl',
            current === item.id
              ? 'bg-brand text-white'
              : 'bg-zinc-100 dark:bg-zinc-800'
          )}
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}
