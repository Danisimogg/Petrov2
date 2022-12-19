import { ReactNode } from 'react'

export interface WorkProps {
  children: ReactNode
  progress: number
}

export function WorkRight({ children, progress }: WorkProps) {
  const translateY = Math.max(-50, -(progress - 0.5) * 50)

  return (
    <div
      className="flex flex-1 lg:items-center justify-center h-screen"
      style={{ transform: `translateY(${translateY}px)` }}
    >
      <div className="px-5 w-full pt-10 lg:pt-0">{children}</div>
    </div>
  )
}
