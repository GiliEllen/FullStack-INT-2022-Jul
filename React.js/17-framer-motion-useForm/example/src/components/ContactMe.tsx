import axios from "axios";
import React, { useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

const ContactMe = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log("test");
    console.log(data);
  };

    const handleSendForm = async (data:object) => {
    console.log(data)
      const response = await axios.post("/api/contact", { data });
      //handle the response
      try {
      } catch (error) {
        console.error(error)
      }
    };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} placeholder="First name" />
      <input {...register("email")} placeholder="Email" />
      <textarea {...register("aboutYou")} placeholder="About you" />

      <input type="submit" />
    </form>
  );
};

export default ContactMe;
