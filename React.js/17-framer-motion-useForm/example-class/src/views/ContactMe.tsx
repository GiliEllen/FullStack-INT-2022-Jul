import axios from "axios"
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  email: string
  name: string
  about: string
  password: string
  rePassword: string
}

export default function ContactMe() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
        email: "This is email"
    }
  })
  const onSubmit: SubmitHandler<Inputs> = async (info) => {
    try {
        console.log(info)
        // const {data} = await axios.post("/api/contact", info)
    } catch (error) {
        console.error(error)
    }
    
  }

//   console.log(watch("email")) 

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} placeholder="email"/>
      <input {...register("name", { required: true })} />
      <input {...register("password", { required: true })} />
      <input {...register("rePassword", { required: true })} />
      <textarea {...register("about")} placeholder="What would you like to say?"/>
      <input type="submit" />
    </form>
  )
}