import Navbar from '@/components/modules/Navbar/navbar'
import React from 'react'
import { layoutPropsType } from './layout.types'
import Footer from '@/components/modules/Footer/footer'



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