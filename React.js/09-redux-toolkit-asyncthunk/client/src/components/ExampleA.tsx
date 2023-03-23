import React from 'react'
import { useAppSelector } from '../app/hooks'
import { userSelector } from '../features/user/userSlice'

const ExampleA = () => {
    const user = useAppSelector(userSelector)
  return (
    <div>{user!.email}</div>
  )
}

export default ExampleA