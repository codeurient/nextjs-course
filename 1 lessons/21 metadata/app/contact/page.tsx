import { Metadata } from 'next'
import React from 'react'

// 1) SEO ucun metadata-lardan istifade edilir. Inspect penceresine gederek deyisiklikleri gormek olar.
export const metadata: Metadata = {
  title: 'Contact',
  description: 'This medata data using for SEO',
}

const ContactPage = () => {
  return (
    <div>ContactPage</div>
  )
}

export default ContactPage