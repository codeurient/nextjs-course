import React from 'react'

// 1) URL yerine yazilan LINKI elde etmek ucun PARAMETR den istifade edeceyik. Asagida gorduyumuz funksiyaya bir parametr vereceyik ve bu parametr avtomatik olaraq girilen link-i elde edecek.
const product = ({params}: any) => {
  return (
    // 2) sonra ise qovlugun adini yazaraq hansi URL-den gelen linki elde etmek istediyimizi bildiririk: {params.product}
    <div>This is a dynamic link: {params.product}</div>
  )
}

export default product