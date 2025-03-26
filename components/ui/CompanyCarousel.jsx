'use client'
import { Carousel, CarouselContent, CarouselItem } from './carousel'
import companies from '@/data/companies.json'
import Autoplay from 'embla-carousel-autoplay'
import { Car } from 'lucide-react'
import Image from 'next/image'

function CompanyCarousel() {
  return (
    <div>
      <Carousel
        plugins={[Autoplay({ delay: 2000, }),
        ]}
        className='w-full py-10'
      >


        <CarouselContent className='flex gap-5 sm:gap-20 items-center'>{
          companies.map((path, id, name) => {

            return (

              <CarouselItem key={id} className='basis-1/3 lg:basis-1/6'>

                <Image src={path.path} alt={path.name} width={200} height={100} className='h-9 sm:h-14 w-auto object-contain' />
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default CompanyCarousel