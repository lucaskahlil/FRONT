import { FormEvent } from "react";

export function LoginForm() {
  
  function handleSubmit (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const LoginPayload = {
      email: e.currentTarget.email.value,
      senha: e.currentTarget.senha.value,
    };
    console.log(LoginPayload)
  }

  return (
    <div>
      <h2>BlueLive</h2>
      <form onSubmit={handleSubmit}>
       <input placeholder="Seu e-mail" name="email"/>
       <input placeholder="Sua senha" name="senha"/>
       <button type="submit">Login</button>
      </form>
    </div>
  );
}
