import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div className='flex flex-col items-center justify-center  container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>

            <h1 className='text-2xl sm:text-4xl font-bold mb-32'>About<span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
            <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Properties to Your Vision</p>
            <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
                <img src={assets.brand_img} alt='' className='w-full sm:w-1/2 max-w-lg' />
                <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                    <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>10+</p>
                            <p>Years of Excellence</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>12+</p>
                            <p>Projects completed</p>
                       </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>20+</p>
                            <p>Mn. Sq. Ft.</p>
                        </div>
                        <div>
                        <   p className='text-4xl font-medium text-gray-800'>25+</p>
                            <p>ongoing Projects</p>
                        </div>
                    </div>
                    <p className='my-10 max-w-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quam voluptate totam est adipisci quidem sint ratione unde et, neque natus quasi doloremque minima, praesentium sequi, similique exercitationem omnis! Debitis?</p>
                    <button className='bg-blue-500 text-white px-8 py-2 rounded'>Learn more</button>
                </div>
                
            </div>
        </div>
    )
}

export default About