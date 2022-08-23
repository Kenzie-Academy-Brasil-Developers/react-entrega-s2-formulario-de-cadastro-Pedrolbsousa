import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";

function DashBoard({ user }) {
  const Nav = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || !user) {
      localStorage.clear();
      Nav("/");
    }
  });
  const clearToken = () => {
    localStorage.clear();
    Nav("/");
  };
  return (
    <>
      <header className="logoDashBoard">
        <section className="sectionHeaderDashBoard">
          <h1 className="LogoKenzie">Kenzie Hub</h1>{" "}
          <button onClick={clearToken} className="buttonDashBoard">
            Sair
          </button>
        </section>
      </header>
      <main className="mainDashBoard">
        <aside className="asideDashBoard">
          <div className="contentDeshBoard01">
            <h3 className="nameUser"> Olá, {user?.name}</h3>
            <p>{user?.course_module}</p>
          </div>
        </aside>
        <aside className="asideMainDeshBoard">
          <div className="contentDeshBoard02">
            <h3 className="contentMeinDeshBoard">
              Que pena! Estamos em desenvolvimento :(
            </h3>
            <h4 className="txtMeinDashBoard">
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </h4>
          </div>
        </aside>
      </main>
    </>
  );
}
export default DashBoard;
