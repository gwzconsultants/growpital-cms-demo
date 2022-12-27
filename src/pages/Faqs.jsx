import React from 'react'
import FaqsPage from '../components/Faqs_Component/FaqsPage'
import Footer from '../layout/Footer'
import Header from '../layout/Header'

const Faqs = () => {
  return (
    <>
    <Header />
    <div className='mt-5 py-5'>

    <FaqsPage />
    </div>
    <Footer />
    </>
  )
}

export default Faqs