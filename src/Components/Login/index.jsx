import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "../../App.css";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import Toast from "../Toast";
const schema = yup.object({
  email: yup
    .string()
    .email("É necessario que seja um email")
    .required("Campo orbigatorio"),
});

function Login({ setUser }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useNavigate();

  async function loginUser(data) {
    console.log(data);

    const response = await api.post("/sessions", data);
    setUser(response.data.user);
    localStorage.setItem("token", `${response.data.token}`);
    history("/Dashboard");
    console.log(response);
  }

  return (
    <>
      <header className="LogoKenzie">
        <h1>Kenzie Hub</h1>
      </header>
      <section className="loginForm">
        <h3>Login</h3>
        <form
          action=""
          className="formLogin"
          onSubmit={handleSubmit(loginUser)}
        >
          <label htmlFor="email">
            Email
            <input
              type="Email"
              className="inputEmail"
              id="email"
              placeholder="Seu email"
              {...register("email")}
            />
            <p className="alert">{errors.email?.message}</p>
          </label>
          <label htmlFor="password">
            Senha
            <input
              type="password"
              name="Senha"
              id="inputPassWord"
              className="inputPassWord"
              placeholder="●●●●●●●●●●●●●"
              {...register("password")}
            />
            <p className="alert">{errors.password?.message}</p>
          </label>
          <button type="submit" className="bottunLogin">
            Entrar
          </button>
          <p>Ainda não possui uma conta?</p>
          <button
            className="bottunRegister"
            onClick={() => history("/Registro")}
          >
            Cadastre-se
          </button>
          <Toast />
        </form>
      </section>
    </>
  );
}
export default Login;
