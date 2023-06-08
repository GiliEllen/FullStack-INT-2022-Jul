export interface User {
    id: number,
    email: string,
    name: string,
    password: string,
    steps: number
}

export const USERS:User[] = [
 {
    id: 1,
    email: "gili@gili.com",
    name: "gili",
    password: "Aa123456!",
    steps: 22
 },
 {
    id: 2,
    email: "test@test.com",
    name: "tester",
    password: "Aa123456!",
    steps: 33
 }
]