import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

import styles from "./styles";
import Title from "../../components/Title";

import SchoolsRepository from "../../models/user/SchoolRepository";
import School from "../../models/user/School";

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
      SchoolsRepository.update(school.id, nome, dataDeFundação, quantidadeFuncionarios, quantidadeDeTurmas, bairro, cidade, cep, telefone, email, nomeResponsavel, cargo);
      clearInputs();
    } else {
      const newSchool = new School(nome, dataDeFundação, quantidadeFuncionarios, quantidadeDeTurmas, bairro, cidade, cep, telefone, email, nomeResponsavel, cargo);
      SchoolsRepository.add(newSchool);
      clearInputs();
    }
    navigation.navigate("Users");
  };

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
        placeholder="Digite o email do usuário"
        style={styles.userInput}
        onChangeText={setEmail}
        value={email}
      />

      <TouchableOpacity style={styles.button} onPress={handleSchoolAction}>
        <Text>{isUpdate ? "Salvar Alterações" : "Criar Escola"}</Text>
      </TouchableOpacity>

      {isUpdate && (
        <TouchableOpacity style={styles.button} onPress={clearInputs}>
          <Text>Cancelar Edição</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
