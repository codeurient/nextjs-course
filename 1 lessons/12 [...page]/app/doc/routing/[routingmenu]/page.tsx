import React from 'react'


// 1) http://localhost:3000/doc/routing/herHansiBirLink      bele yazdiqda bu sehife acilir.
const routingMenu = ({params}: any) => {
  return (
    <div>Routing Menu Items: {params.routingmenu}</div>
  )
}

export default routingMenu