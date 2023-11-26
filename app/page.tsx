import React from 'react'
import { SunIcon, BoltIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid'

function HomePage() {
    return (
        <div className='flex flex-col items-center 
    justify-center h-screen px-2 text-white'>
            <h1 className="text-5xl font-bold mb-10">ChatGPT</h1>

            <div className='flex space-x-2 text-center'>
                <div>
                    <div className='flex flex-col items-center justify-center mb-5'>
                        <SunIcon className="h-8 w-8" />
                        <h2>Examples</h2>
                    </div>

                    <div className='space-y-2'>
                        <p className='infoText'>Explain Something to me</p>
                        <p className='infoText'>Describe a cat</p>
                        <p className='infoText'>What is the color of the sun?</p>
                    </div>
                </div>

                <div>
                    <div className='flex flex-col items-center justify-center mb-5'>
                        <BoltIcon className="h-8 w-8" />
                        <h2>Capabilities</h2>
                    </div>

                    <div className='space-y-2'>
                        <p className='infoText'>Change the ChatGPT model to use</p>
                        <p className='infoText'>Messages are stored in Firebase</p>
                        <p className='infoText'>Toast notifications</p>
                    </div>
                </div>

                <div>
                    <div className='flex flex-col items-center justify-center mb-5'>
                        <ExclamationTriangleIcon className="h-8 w-8" />
                        <h2>Limitation</h2>
                    </div>

                    <div className='space-y-2'>
                        <p className='infoText'>Do not 100% trust answer</p>
                        <p className='infoText'>AI is a double-edged sword</p>
                        <p className='infoText'>Knowledge is limited to 2021</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HomePage
