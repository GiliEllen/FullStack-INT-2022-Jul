
export interface User {
  _id: string,
  email: string,
  password: string
}

export interface Message {
  text: string,
  date: Date,
  from: UserMessage, 
  to: UserMessage
}

export interface UserMessage {
  email: string
}