import api from "../services/api";

class Edita {
  constructor() {
    this.id = localStorage.getItem("id");
  }

  async show() {
    try {
      const response = await api.get(`/musicas/${this.id}`);
      const { musica, banda_id, album, genero } = response.data;
      document.querySelector("input[name=musica]").value = musica;
      document.querySelector("select[name=banda_id]").value = banda_id;
      document.querySelector("input[name=album]").value = album;
      document.querySelector("input[name=genero]").value = genero;
    } catch (error) {
      alert(`Erro ao buscar: ${error}`);
    }
  }

  async update() {
    try {
      const response = await api.put(`/musicas/${this.id}`, {
        musica: this.musica,
        banda_id: this.banda_id,
        album: this.album,
        genero: this.genero,
      });
      localStorage.removeItem("id");
      window.location.href = "/";
    } catch (error) {
      alert(`Falha ao atualizar: ${error}`);
    }
  }

  async form(event) {
    event.preventDefault();
    this.musica = document.querySelector("input[name=musica]").value;
    this.banda_id = document.querySelector("select[name=banda_id]").value;
    this.album = document.querySelector("input[name=album]").value;
    this.genero = document.querySelector("input[name=genero]").value;
    if (this.musica && this.banda_id && this.album && this.genero) {
      await this.update();
    }
  }
}

export default Edita;
