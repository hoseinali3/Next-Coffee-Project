import Navbar from '@/components/templates/navbar/navbar'
import React from 'react'
import { layoutPropsType } from './layout.types'
import Footer from '@/components/templates/footer/footer'



function Layout({ children }: layoutPropsType) {
    return (
        <div>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />

        </div>
    )
}

export default Layout