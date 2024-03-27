import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';

import styles from "./styles";
import Title from "../../components/Title";

import SchoolRepository from "../../models/school/SchoolRepository";

export default function Profile({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;

  const editSchool = () => {
    navigation.navigate("Form", { school: data, edit: true });
  };

  const deleteSchool = () => {
    SchoolRepository.remove(data.id);
    navigation.navigate("Users");
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#eeb600', '#f8da45', '#ffff71']} 
        styles={styles.LinearGradient}>
        <Title title="Detalhes" />
      </LinearGradient>


      {data ? (
        <Text style={styles.detalhes}>Detalhes das escolas</Text>
      ) : (
        <Text style={styles.detalhes}>Selecione uma escola para exibir seus detalhes</Text>
      )}

      <View style={styles.school}>
        <View style={styles.schoolDetail}>
          <Text style={styles.text}>{data.nome}</Text>
          <Text style={styles.text}>{data.dataDeFundação}</Text>
          <Text style={styles.text}>{data.quantidadeFuncionarios}</Text>
          <Text style={styles.text}>{data.quantidadeDeTurmas}</Text>
          <Text style={styles.text}>{data.bairro}</Text>
          <Text style={styles.text}>{data.cidade}</Text>
          <Text style={styles.text}>{data.cep}</Text>
          <Text style={styles.text}>{data.telefone}</Text>
          <Text style={styles.text}>{data.email}</Text>
          <Text style={styles.text}>{data.nomeResponsavel}</Text>
          <Text style={styles.text}>{data.cargo}</Text>
        </View>

        <View style={styles.schoolActions}>
          <TouchableOpacity style={styles.editButton} onPress={editSchool}>
            <Text>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={deleteSchool}>
            <Text>Excluir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
