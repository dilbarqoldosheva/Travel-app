import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import WhyCHooseCard from './WhyCHooseCard'

function WhyChoose() {
  return (
    <div className='pt-16 pb-24'>
      <SectionHeading heading='Why Choose Us' />
      <div className='grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20 '>
        <div>
          <WhyCHooseCard image="/image/c1.svg" title="Best Price Guarantee" />
        </div>
        <div>
          <WhyCHooseCard image="/image/c2.svg" title="Easy & Quick Booking" />
        </div>
        <div>
          <WhyCHooseCard image="/image/c3.svg" title="Customer Care 24/7" />
        </div>
      </div>
    </div>
  )
}

export default WhyChoose