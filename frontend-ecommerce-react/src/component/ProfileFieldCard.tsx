import { Divider } from '@mui/material'
import React from 'react'

type ProfileFieldCardProps = {
  keys: string
  value: string
}

const ProfileFieldCard = ({ keys, value }: ProfileFieldCardProps) => {
  return (
    <div className="p-5 flex items-center bg-slate-50">
      <p className="w-20 lg:w-36 pr-5 text-sm text-gray-700">{keys}</p>
      <Divider orientation="vertical" flexItem />
      <p className="pl-4 lg:pl-10 font-semibold lg:text-lg text-gray-900">{value}</p>
    </div>
  )
}

export default ProfileFieldCard