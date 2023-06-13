'use client'

import Link from "next/link"
import Image from "next/image"
import { useState, useEff
 } from "react";
 import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
  return (
    <div className="flex-between w-full mb-16 pt-3">
        <Link href='/' className="flex gap-2 flex-center">
            <p className='logo_text'>
                <span className="bg-red-900 text-white p-1">AI</span>
                Prompt</p>

            <div className="sm:flex hidden">

            </div>
        </Link>
    </div>
  )
}

export default Nav