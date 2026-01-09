// 1) app/dashboard/page.tsx   - yaratdiq ve sonra RAFCE yazaraq ENTEr basdiqda avto IMPORT etdi butun kodlari.

// 2) URL yerinde http://localhost:3000/dashboard       yazarsaq ekranda 'HELLO WORLD' yazaisini goreceyik. 
import React from 'react'

// 3) Burda AUTO IMPORT zamani 'page = () => {}' olacaq ancaq PAGE adini deyiserek basqa adda qoymaq olar. Meselen: dashboard
// Her iki halda URL yrinde yuxarida gosterilen linki yazdiqda ekrana lazimli mesaj ayzdirilacaqdir. Ancaq default gelen PAGE yazisini 
// deyisdirmek meslehetdir.

const dashboard = () => {
  return (
    <div>Hello world</div>
  )
}

export default dashboard