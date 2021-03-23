import api from "../services/api";

class Register {
  constructor() {
    this.username = "";
    this.email = "";
    this.password = "";
  }

  async store() {
    try {
      const response = await api.post("/register", {
        username: this.username,
        email: this.email,
        password: this.password,
      });
      alert("Usuário registrado!!!");
      window.location.href = "/login.html";
    } catch (error) {
      document.querySelector("input[name=password]").value = "";
      alert(`Falha ao Cadastrar: ${error}`);
    }
  }

  async salvar(event) {
    event.preventDefault();
    this.username = document.querySelector("input[name=username]").value;
    this.email = document.querySelector("input[name=email]").value;
    this.password = document.querySelector("input[name=password]").value;
    if (this.username && this.email && this.password) {
      await this.store();
    }
  }
}

export default Register;
