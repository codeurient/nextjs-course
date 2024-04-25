import React from 'react'

// 1) Kvadrat morterize icinde yaradilan linkler dinamik linklerdir ve istenilen linki daxil etdikde URL yerinde hemin dinamik link ile yaradilan sehife acilacaqdir.
const product = () => {
  return (
    <div>This is a dynamic link</div>
  )
}

export default product


// 2) dashboard yazdiqda ise statik link acilacaqdir cunki statik linkler daha ustundur.


// 3) Yoxlamaq ucun gedek ve url yerinde bele yazaq: 
    // a) http://localhost:3000/dashboards
    // b) http://localhost:3000/kuku
    // c) http://localhost:3000/hello  ve.s ferqi yoxdur ne yazsaqda dinamik link bizi bu sehifeye yonlendirecekdir. 3 Nomreli qovluqda SLUG yazmisdiq ancaq istenilen yazini yazmaq olar
    // [] simvollari icinde. 
