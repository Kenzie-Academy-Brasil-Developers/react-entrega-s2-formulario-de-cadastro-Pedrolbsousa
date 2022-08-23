import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Api from "../services/api";
import { Link } from "react-router-dom";

import "../../App.css";
/*------------------------------------------------------
  **** validador de campos preenchidos corretamente **** 
------------------------------------------------------*/
const schema = yup.object({
  name: yup.string().required("O nome é obrigatorio"),
  email: yup
    .string()
    .email("Deve ser um Email")
    .required("Email é obrigatório"),
  password: yup
    .string()
    .min(8, "No minimo 8 caracteres")
    .required("Senha é obrigatório"),
  confirmPassword: yup
    .string()
    .min(8, "No minimo 8 caracteres")
    .required("Confirmação de senha é obrigatório"),
  bio: yup.string().required("Este campo é obrigatorio"),
  contact: yup.string().required("Este campo é obrigatorio"),
  course_module: yup.string().required("Este campo é obrigatorio"),
});
/*------------------------------------------------------
 ****      formulario de cadastro de usuario        **** 
------------------------------------------------------*/
function Registro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  async function registroUser(data) {
    console.log(data);

    const response = await Api.post("/users", data);

    console.log(response);
  }

  /*   const registerUser = (registreData) => {
    console.log(registreData);
  }; */

  return (
    <>
      <nav className="logo">
        <h1 className="LogoKenzie">Kenzie Hub</h1>
        <Link to="/">
          <button className="buttonExit">Voltar</button>
        </Link>
      </nav>
      <main>
        <section>
          <form
            action=""
            className="formRegistration"
            onSubmit={handleSubmit(registroUser)}
          >
            <h3>Crie sua conta</h3>
            <p>Rapido e grátis, vamos nessa</p>
            <label htmlFor="name">
              Nome
              <input
                type="text"
                className="inputName"
                placeholder="Digite aqui seu nome"
                id="name"
                {...register("name")}
              />
              <p className="alert">{errors.name?.message}</p>
            </label>
            <label htmlFor="email">
              Email
              <input
                type="text"
                className="inputEmail"
                placeholder="Digite aqui seu email"
                id="email"
                {...register("email")}
              />
              <p className="alert">{errors.email?.message}</p>
            </label>
            <label htmlFor="password">
              Senha
              <input
                type="password"
                className="inputPassWord"
                placeholder="Digite aqui sua senha"
                id="password"
                {...register("password")}
              />
              <p className="alert">{errors.password?.message}</p>
            </label>
            <label htmlFor="confirmPassword">
              Confirmar Senha
              <input
                type="password"
                className="inputPassWord"
                placeholder="Digite novamente sua senha"
                id="confirm-password"
                {...register("confirmPassword")}
              />
              <p className="alert">{errors.confirmPassword?.message}</p>
            </label>
            <label htmlFor="bio">
              Bio
              <input
                type="text"
                className="inputBio"
                placeholder="Fale um pouco sobre você"
                id="bio"
                {...register("bio")}
              />
              <p className="alert">{errors.bio?.message}</p>
            </label>
            <label htmlFor="contact">
              contato
              <input
                type="text"
                className="inputContact"
                placeholder="Opções de contato"
                id="contact"
                {...register("contact")}
              />
              <p className="alert">{errors.contact?.message}</p>
            </label>
            <label htmlFor="selectMode">
              Selecionar módulo
              <select
                className="inputSelectMode"
                placeholder="Selecione seu Módulo"
                id="selectMode"
                {...register("course_module")}
              >
                <option value="Primeiro Modulo(Introdução ao Frontend)">
                  Primeiro Modulo
                </option>
                <option value="Segundo Modulo(Introdução ao Frontend)">
                  Segundo Modulo
                </option>
                <option value="Terceiro Modulo(Introdução ao Frontend)">
                  Terceiro Modulo
                </option>
                <option value="Quarto Modulo(Introdução ao Frontend)">
                  Quarto Modulo
                </option>
                <option value="Quinto Modulo(Introdução ao Frontend)">
                  Quinto Modulo
                </option>
                <option value="Sexto Modulo(Introdução ao Frontend)">
                  Sexto Modulo
                </option>
              </select>
              <p className="alert">{errors.course_module?.message}</p>
            </label>
            <Link to="/">
              <button type="submit" className="bottunRegister">
                Cadastrar
              </button>
            </Link>
          </form>
        </section>
      </main>
    </>
  );
}
export default Registro;
