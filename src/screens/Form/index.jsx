import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

import styles from "./styles";
import Title from "../../components/Title";

import SchoolsRepository from "../../models/school/SchoolRepository";
import School from "../../models/school/School";

export default function Form({ route }) {
  let { school, edit } = route.params;

  const [nome, setNome] = useState("");
  const [dataDeFundação, setDataDeFundação] = useState("");
  const [quantidadeFuncionarios, setQuantidadeFuncionarios] = useState("");
  const [quantidadeDeTurmas, setQuantidadeDeTurmas] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [nomeResponsavel, setNomeResponsavel] = useState("");
  const [cargo, setCargo] = useState("");
  const [isUpdate, setIsUpdate] = useState(edit);

  const navigation = useNavigation();

  useEffect(() => {
    if (edit) {
      setNome(school.nome);
      setDataDeFundação(school.dataDeFundação);
      setQuantidadeFuncionarios(school.quantidadeFuncionarios);
      setQuantidadeDeTurmas(school.quantidadeDeTurmas);
      setBairro(school.bairro);
      setCidade(school.cidade);
      setCep(school.cep);
      setTelefone(school.telefone);
      setEmail(school.email);
      setNomeResponsavel(school.nomeResponsavel);
      setCargo(school.cargo);
      setIsUpdate(true);
    } else {
      clearInputs();
    }
  }, [school, edit]);

  const handleSchoolAction = () => {
    if (isUpdate) {
      SchoolsRepository.update(school.id, nome, dataDeFundação, parseInt(quantidadeFuncionarios) || 0, parseInt(quantidadeDeTurmas) || 0, bairro, cidade, cep, telefone, email, nomeResponsavel, cargo);
      clearInputs();
    } else {
      const newSchool = new School(nome, dataDeFundação, parseInt(quantidadeFuncionarios) || 0, parseInt(quantidadeDeTurmas) || 0, bairro, cidade, cep, telefone, email, nomeResponsavel, cargo);
      SchoolsRepository.add(newSchool);
      clearInputs();
    }
    navigation.navigate("Users");
  };

  const cancelEdit = () => {
    navigation.navigate("Users");
    setIsUpdate(false);
  }

  const clearInputs = () => { 
    setIsUpdate(false);
    edit = false; 
    setNome("");
    setDataDeFundação("");
    setQuantidadeFuncionarios("");
    setQuantidadeDeTurmas("");
    setBairro("");
    setCidade("");
    setCep("");
    setTelefone("");
    setEmail("");
    setNomeResponsavel("");
    setCargo("");
  };

  return (
    <View style={styles.container}>
      <Title title={isUpdate ? "Editar Escola" : "Nova Escola"} />
      <TextInput
        placeholder="Digite o nome da Escola"
        style={styles.userInput}
        onChangeText={setNome}
        value={nome}
      />
      <TextInput
        placeholder="Digite a Data de Fundação da Escola"
        style={styles.userInput}
        onChangeText={setDataDeFundação}
        value={dataDeFundação}
      />
      <TextInput
        placeholder="Digite a quantidade de funcionarios da Escola"
        style={styles.userInput}
        onChangeText={setQuantidadeFuncionarios}
        value={quantidadeFuncionarios}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Digite a quantidade de turmas da Escola"
        style={styles.userInput}
        onChangeText={setQuantidadeDeTurmas}
        value={quantidadeDeTurmas}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Digite o bairro da Escola"
        style={styles.userInput}
        onChangeText={setBairro}
        value={bairro}
      />
      <TextInput
        placeholder="Digite a cidade da Escola"
        style={styles.userInput}
        onChangeText={setCidade}
        value={cidade}
      />
      <TextInput
        placeholder="Digite o CEP da Escola"
        style={styles.userInput}
        onChangeText={setCep}
        value={cep}
      />
      <TextInput
        placeholder="Digite o telefone de contato da Escola"
        style={styles.userInput}
        onChangeText={setTelefone}
        value={telefone}
      />
      <TextInput
        placeholder="Digite o email de contato da Escola"
        style={styles.userInput}
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        placeholder="Digite o nome do responsável pela Escola"
        style={styles.userInput}
        onChangeText={setNomeResponsavel}
        value={nomeResponsavel}
      />
      <TextInput
        placeholder="Digite o cargo do responsável pela Escola"
        style={styles.userInput}
        onChangeText={setCargo}
        value={cargo}
      />


      <TouchableOpacity style={styles.button} onPress={handleSchoolAction}>
        <Text>{isUpdate ? "Salvar Alterações" : "Criar Escola"}</Text>
      </TouchableOpacity>

      {isUpdate && (
        <TouchableOpacity style={styles.button} onPress={cancelEdit}>
          <Text>Cancelar Edição</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
