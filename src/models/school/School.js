export default class User {
  constructor(nome, dataDeFundação, quantidadeFuncionarios, quantidadeDeTurmas, bairro, cidade, cep, telefone, email, nomeResponsavel, cargo) {
    this.id = this.generateId();
    this.nome = nome;
    this.dataDeFundação = dataDeFundação;
    this.quantidadeFuncionarios = quantidadeFuncionarios;
    this.quantidadeDeTurmas = quantidadeDeTurmas;
    this.bairro = bairro;
    this.cidade = cidade;
    this.cep = cep;
    this.telefone = telefone;
    this.email = email;
    this.nomeResponsavel = nomeResponsavel;
    this.cargo = cargo;
  }

  generateId() {
    return Math.floor(Math.random() * 1000);
  }
}
