import { FormEvent } from "react";
import { api } from "../../../utils/api/api";

export function LoginForm() {
  
  async function handleSubmit (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const loginPayload = {
      Email: e.currentTarget.email.value,
      Password: e.currentTarget.senha.value,
    };
    const userData = await api.login(loginPayload)
    console.log(userData)
  }

  return (
    <div>
      <h2>BlueLive</h2>
      <form onSubmit={handleSubmit}>
       <input placeholder="Seu e-mail" name="email"/>
       <input placeholder="Sua senha" type="password" name="senha"/>
       <button type="submit">Login</button>
      </form>
    </div>
  );
}
