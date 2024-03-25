import { school } from "../../data/Profile";
import School from "./School";

class SchoolsRepository {
  constructor() {
    this.schools = [];
  }

  getAll() {
    return this.schools;
  }

  get(id) {
    return this.schools.find((school) => school.id === id);
  }

  add(school) {
    this.schools.push(school);
  }

  remove(id) {
    this.schools = this.schools.filter((school) => school.id !== id);
  }

  update(id, nome, dataDeFundação, quantidadeFuncionarios, quantidadeDeTurmas, bairro, cidade, cep, telefone, email, nomeResponsavel, cargo) {
    const school = this.get(id);

    if (school) {
      school.nome = nome;
      school.dataDeFundação = dataDeFundação;
      school.quantidadeFuncionarios = quantidadeFuncionarios;
      school.quantidadeDeTurmas = quantidadeDeTurmas;
      school.bairro = bairro;
      school.cidade = cidade;
      school.cep = cep;
      school.telefone = telefone;
      school.email = email;
      school.nomeResponsavel = nomeResponsavel;
      school.cargo = cargo;
    }
    return school;
  }
}

const schoolsRepository = new SchoolsRepository();
const newSchool = new School(school.nome, school.dataDeFundação, school.quantidadeFuncionarios, school.quantidadeDeTurmas, school.bairro, school.cidade, school.cep, school.telefone, school.email, school.nomeResponsavel, school.cargo);

schoolsRepository.add(newSchool);

export default schoolsRepository;
