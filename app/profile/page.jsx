'use client'

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

import Profile from "@components/Profile"


const ProfilePage = () => {

const handleEdit = () => {

}

const handleDelete = async() => {

}

  return (
    <Profile 
    name='My'
    desc='Welcome to your Personalized profile page'
    data={[]}
    handleEdit={handleEdit}
    handleDelete={handleDelete}
    />
  )
}

export default ProfilePage