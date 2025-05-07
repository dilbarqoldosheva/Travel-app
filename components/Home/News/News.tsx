import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import NewsCard from './NewsCard'

const News = () => {
  return (
    <div className='py-16'>
        <SectionHeading heading='Exciting Travel News for You'/>
        <div className='W-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center mt-20'> 
            <div>
                <NewsCard/>
            </div>
        </div>
    </div>
  )
}

export default News