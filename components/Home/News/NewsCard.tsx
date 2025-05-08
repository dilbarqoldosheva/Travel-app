import Image from 'next/image'
import React from 'react'

type Props ={
  image:string
  date:string
  title:string
}
const NewsCard = ({date, image, title}:Props) => {
  return (
    <div>
      <div className='h-[300px]'>
        <Image src={image} alt={title} width={300} height={300} className='w-full h-full object-center rounded-lg'/>
      </div>
      <h1 className='mt-6 text-lg text-gray-950 font-semibold hover:text-blue-950 transition-all duration-200 cursor-pointer'>{title}</h1>
      <h1 className='text-sm text-gray-600 mt-3'>{date}</h1>
    </div>
  )
}

export default NewsCard