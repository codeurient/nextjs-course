import React from 'react'

// 1) URL yerinde istediyimiz qeder link adı elave etmek isteyirikse onda REST istifade edeb bilerik:    http://localhost:3000/catch/as/asda/asda
const infinity = ({params} : any) => {
    console.log(params);
    
  return (
    <div>Infinity URL: {params.page}</div>
  )
}

export default infinity