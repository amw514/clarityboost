import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import React from 'react'

const Home = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      
    </div>
  )
}



export default Home