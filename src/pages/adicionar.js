import api from "../services/api";

class Adiciona {
  constructor() {}

  async store() {
    try {
      const response = await api.post("/musicas", {
        musica: this.musica,
        banda_id: this.banda_id,
        album: this.album,
        genero: this.genero,
      });
      window.location.href = "/";
    } catch (error) {
      alert(`Falha ao cadastrar: ${error}`);
    }
  }

  async form(event) {
    event.preventDefault();
    this.musica = document.querySelector("input[name=musica]").value;
    this.banda_id = document.querySelector("select[name=banda_id]").value;
    this.album = document.querySelector("input[name=album]").value;
    this.genero = document.querySelector("input[name=genero]").value;
    if (this.musica && this.banda_id && this.album && this.genero) {
      await this.store();
    }
  }
}

export default Adiciona;
