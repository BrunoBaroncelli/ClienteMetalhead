import api from "../services/api";

class Edita {
  constructor() {
    this.id = localStorage.getItem("id");
  }

  async show() {
    try {
      const response = await api.get(`/musicas/${this.id}`);
      const { musica_nome, banda_id, genero, album } = response.data;
      document.querySelector("input[name=musica_nome]").value = musica_nome;
      document.querySelector("select[name=banda_id]").value = banda_id;
      document.querySelector("input[name=genero]").value = genero;
      document.querySelector("input[name=album]").value = album;
    } catch (error) {
      alert(`Erro ao buscar: ${error}`);
    }
  }

  async update() {
    try {
      const response = await api.put(`/musicas/${this.id}`, {
        musica_nome: this.musica_nome,
        banda_id: this.banda_id,
        genero: this.genero,
        album: this.album,
      });
      localStorage.removeItem("id");
      window.location.href = "/";
    } catch (error) {
      alert(`Falha ao atualizar: ${error}`);
    }
  }

  async form(event) {
    event.preventDefault();
    this.musica_nome = document.querySelector("input[name=musica_nome]").value;
    this.banda_id = document.querySelector("select[name=banda_id]").value;
    this.genero = document.querySelector("input[name=genero]").value;
    this.album = document.querySelector("input[name=album]").value;
    if (this.musica_nome && this.banda_id && this.album && this.genero) {
      await this.update();
    }
  }
}

export default Edita;
