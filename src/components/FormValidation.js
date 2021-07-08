import React from "react";
import { useForm } from "react-hook-form";

export default function FormValidation() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true })} />
      {errors.firstName?.type === "required" && "First name is required"}

      <input {...register("lastName", { required: true })} />
      {errors.lastName && "Last name is required"}

      <input type="file" {...register("image", { required: true })} />
      {errors.image && "Image is required"}

      <input type="submit" />
    </form>
  );
}
