import api from "../services/api";

class Adiciona {
  constructor() {}

  async store() {
    try {
      const response = await api.post("/musicas", {
        musica_nome: this.musica_nome,
        banda_id: this.banda_id,
        genero: this.genero,
        album: this.album,
      });
      window.location.href = "/";
    } catch (error) {
      alert(`Falha ao cadastrar: ${error}`);
    }
  }

  async form(event) {
    event.preventDefault();
    this.musica_nome = document.querySelector("input[name=musica_nome]").value;
    this.banda_id = document.querySelector("select[name=banda_id]").value;
    this.genero = document.querySelector("input[name=genero]").value;
    this.album = document.querySelector("input[name=album]").value;
    if (this.musica_nome && this.banda_id && this.genero && this.album) {
      await this.store();
    }
  }
}

export default Adiciona;
