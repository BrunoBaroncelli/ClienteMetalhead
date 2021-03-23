import api from "../services/api";

class Remover {
  constructor(id) {
    this.id = id;
  }

  async remove() {
    try {
      const response = await api.delete(`/musicas/${this.id}`);
      window.location.href = "/";
    } catch (error) {
      alert(`Falha ao remover: ${error}`);
    }
  }
}

export default Remover;
