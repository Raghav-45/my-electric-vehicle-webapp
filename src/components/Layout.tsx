import { cn } from '@/lib/utils'
import { FC } from 'react'
import Navbar from './Navbar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={cn('bg-white text-slate-900 antialiased light')}>
      <div className='min-h-screen pt-12 bg-slate-50 antialiased'>
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default Layout
