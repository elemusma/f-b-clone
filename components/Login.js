// import React from 'react'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

function Login() {
  return (
    <div className='grid place-items-center mt-6'>
        <Image 
        src='https://links.papareact.com/5me'
        height={150}
        width={150}
        objectFit="contain"
        className=''
        />

        <h1 
        onClick={signIn} 
        className='mt-5 p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer'>Login with Facebook</h1>
    </div>
  )
}

export default Login