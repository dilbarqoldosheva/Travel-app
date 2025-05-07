import Image from 'next/image'
import React from 'react'

type Props = {
  image: string
  title: string
}
const WhyCHooseCard = ({ image, title }: Props) => {
  return (
    <div>
     <Image src={image} width={70} height={70} alt='image' className='mx-auto'/>
     <h1 className='mt-6 text-center font-medium text-gray-700 text-lg'>{title}</h1>
     <p className='mt-2 text-center text-xs font-medium text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
    </div>
  )
}

export default WhyCHooseCard