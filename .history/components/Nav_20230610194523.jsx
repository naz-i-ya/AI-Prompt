'use client'

import Link from "next/link"
import Image from "next/image"
import { useState, useEff
 } from "react";
 import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
    const isUserLoggedIn = true;

  return (
    <div className="flex-between w-full mb-16 pt-3">
        <Link href='/' className="flex gap-2 flex-center">
            <p className='logo_text'>
                <span className="bg-red-900 text-white p-1">AI</span>
                Prompt</p>
        </Link>

            <div className="sm:flex hidden">
                {
                    isUserLoggedIn ? (
                        <div className="flex gap-3 md:gap-5">
                            <Link href='/create-prompt' className="black_btn">
                                Create Post
                            </Link>

                            <button type="button" onClick={signOut} className="otline_btn">Sign Out</button>

                            <Link href='/profile'>
                                <Image src='assets/images/profile.svg' width={37} height={37}/>
                            </Link>
                        </div>
                    ) : (
                      <div></div>
                    )
                }
            </div>
    </div>
  )
}

export default Nav