import React from 'react'
import { useAppSelector } from '../app/hooks'
import { userSelector } from '../features/user/userSlice'

const ExampleA = () => {
    const user = useAppSelector(userSelector)
  if (user) {
    return (
    <div>{user.email}</div>
  )} else {
    return (
      <div>no user</div>
    )
  }
}

export default ExampleA