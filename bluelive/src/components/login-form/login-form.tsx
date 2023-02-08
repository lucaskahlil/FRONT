import { FormEvent, useState } from "react";
import { api } from "../../utils/api/api";
import { useNavigate } from "react-router-dom";
import { Loading } from "../loading/loading";
import './login-form.css'

export function LoginForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  

  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const loginPayload = {
      Email: e.currentTarget.email.value,
      Password: e.currentTarget.senha.value,
    };
    const userData = await api.login(loginPayload);
    setLoading(false);

    if (!userData) {
      setError(true);
      return;
    } else {
      navigate("/profiles");
    }
  }

  return (
    <>
    { loading ? (<Loading />) : (
    <div className="login-container">
      <h2>BlueLIVE</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <input placeholder="Seu e-mail" name="email" />
        <input placeholder="Sua senha" type="password" name="senha" />
        <button type="submit">Login</button>
      </form>
    </div>
  )}
  </>)
}
