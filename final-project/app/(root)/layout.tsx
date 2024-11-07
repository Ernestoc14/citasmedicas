import React from 'react'
import { NavLinks } from '@/components/ui/Sidebar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='root'>
      <div className='root-container'>
        <div className='wrapper'>
          <NavLinks />
          {children}
        </div>
      </div>
    </main>
  )
}

export default Layout