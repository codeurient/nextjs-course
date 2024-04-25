import React from 'react'

// 1) [...page] sadece bele bir ad verdikde eger link yerinde bele yazariqsa onda axtardigimiz sehifenin olmadigini goreceyik: http://localhost:3000/catch
// a) Ya CATCH qovlugunda page.jsx deye bir fayl yaratmaliyiq.
// b) Yaxud [[...page]] - qoşa cut kvadrat morterizeden istifade etmeliyik.
const infinity = ({params} : any) => {
  return (
    <div>Infinity URL: {params.page}</div>
  )
}

export default infinity