import React from 'react'

const Hero = () => {
  return (
    <section className='relative h-full overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-full bg-cover' style={{backgroundImage:`url('slider/winwall.jpeg')`}}></div>
        Hello
    </section>
  )
}

export default Hero


// 1) Hero.tsx adinda yeni bir component yaratdiq ve bunu sadece elave etdik HOME yəni esas ana sehifeye. Bunun ucun PAGE.TSX faylinda <Hero></Hero> yazdiq.

// 2) Bu Hero.tsx componenti gorsenecek sadece HOME sehifesinde. Eger diger butun sehifelerde gorsensin isteseydik onda PAGE.TSX faylina yox LAYOUT.TSX faylina elave edecekdik.
// Buna aid numuneler artiq vermisik. Test meqsedli yene yoxluya bilersiz. Yəni PAGE.TSX faylinda silib LAYOUT.TSX faylina yazib yoxlamaq olar.