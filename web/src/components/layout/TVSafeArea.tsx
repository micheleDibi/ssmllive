import type { ReactNode } from 'react'

export function TVSafeArea({ children }: { children: ReactNode }) {
  return (
    <div className="absolute inset-0 flex flex-col" style={{ padding: '3.5% 5%' }}>
      {children}
    </div>
  )
}
