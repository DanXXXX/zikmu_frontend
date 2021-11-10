import React from "react";
import { useForm } from "react-hook-form";

function Login(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


    const onSubmit = (data) => {
        console.log(data);
    }
    


  return (
    <div>
      <h1>Incrivez-vous</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          {...register("username", {
            required: "Username is required !",
            minLength: 9,
          })}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          {...register("password", {
            required: "Password is required !",
            maxLength: 20,
          })}
        />
        <p style={{ color: "red" }}>
          {errors.username && errors.username.message}
        </p>
        <p style={{ color: "red" }}>
          {errors.password && errors.password.message}
        </p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
