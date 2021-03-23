import api from "../services/api";

class Login {
  constructor() {
    this.email = "";
    this.password = "";
  }

  async store() {
    try {
      const response = await api.post("/authenticate", {
        email: this.email,
        password: this.password,
      });
      localStorage.setItem("token", response.data.token);
      window.location.href = "/";
    } catch (error) {
      document.querySelector("input[name=password]").value = "";
      alert(`Falha ao autenticar: ${error}`);
    }
  }

  async logar(event) {
    event.preventDefault();
    this.email = document.querySelector("input[name=email]").value;
    this.password = document.querySelector("input[name=password]").value;
    if (this.email && this.password) {
      await this.store();
    }
  }
}

export default Login;
