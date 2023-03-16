import React from 'react'
import { useOnlineStatus } from '../../hooks/useOnlineStatus'

const Card = () => {
    const isOnline = useOnlineStatus()
  return (
    <div>{isOnline ? "Site is open for changes!" : "Not Avilable"}</div>
  )
}

export default Card