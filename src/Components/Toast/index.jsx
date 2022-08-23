import "../../style.css";

function Toast() {
  return (
    <>
      <span className="toastMsgErro">
        <h4>Ops! Algo deu errado</h4>
        <figure className="material-symbols-outlined">error</figure>
        <button className="buttonCloser">X</button>
      </span>
      <span className="toastMsgSucesso">
        <h4>Conta criada com sucesso!</h4>
        <figure className="material-symbols-outlined">check_circle</figure>
        <button className="buttonCloser">X</button>
      </span>
    </>
  );
}
export default Toast;
