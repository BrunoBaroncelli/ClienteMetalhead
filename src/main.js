import "./scss/app.scss";
import "bootstrap";
import api from "./services/api";
import Login from "./pages/login";
import Register from "./pages/register";
import Lista from "./pages/lista";
import Adiciona from "./pages/adicionar";
import Edita from "./pages/editar";

class App {
  constructor() {
    if (
      (!localStorage.getItem("token") ||
        localStorage.getItem("token") === "undefined") &&
      window.location.pathname !== "/login.html" &&
      window.location.pathname !== "/register.html"
    ) {
      window.location.href = "login.html";
    }
    switch (window.location.pathname) {
      case "/login.html":
        localStorage.removeItem("token");
        this.formLogin = document.querySelector("#logar");
        this.registerLogin();
        break;
      case "/register.html":
        this.formRegister = document.querySelector("#register");
        this.registerUser();
        break;
      case "/form.html":
        this.forms = document.querySelector("#forms");
        this.id = localStorage.getItem("id");
        this.registerForm();
        break;
      default:
        const lista = new Lista();
        lista.index();
        break;
    }
  }

  registerLogin() {
    const logar = new Login();
    this.formLogin.onsubmit = (event) => logar.logar(event);
  }

  registerUser() {
    const registrar = new Register();
    this.formRegister.onsubmit = (event) => registrar.salvar(event);
  }

  async registerForm() {
    const bandas = await api.get("bandas");
    const bandaSelect = document.querySelector("select[name=banda_id]");
    bandas.data.forEach((obj) => {
      const option = document.createElement("option");
      option.setAttribute("value", obj.id);
      const nomeBanda = document.createTextNode(obj.nome);
      option.appendChild(nomeBanda);
      bandaSelect.appendChild(option);
    });
    if (
      !localStorage.getItem("id") ||
      localStorage.getItem("id") === "undefined"
    ) {
      const add = new Adiciona();
      this.forms.onsubmit = (event) => add.form(event);
    } else {
      const edit = new Edita();
      edit.show();
      this.forms.onsubmit = (event) => edit.form(event);
    }
  }
}

new App();
