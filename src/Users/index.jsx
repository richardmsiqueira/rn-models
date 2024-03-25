import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';

import styles from "./styles";
import Title from "../../components/Title";
import schoolRepository from "../../models/user/SchoolRepository";

export default function Schools() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [allSchools, setAllSchools] = useState([]);

  useEffect(() => {
    if (isFocused) {
      const schools = schoolRepository.getAll();
      setAllSchools(schools);
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Title title="Escolas" />

      <LinearGradient
        colors={['#eeb600', '#f8da45', '#ffff71']}
        styles={styles.LinearGradient}>
        <Text style={styles.Title}>Tela de listagem de todas as escolas de magias</Text>
      </LinearGradient>

      {allSchools.length > 0 ? (
        <View style={styles.userList}>
          {allSchools.map((school) => (
            <View key={school.id} style={styles.userItem}>
              <View>
                <Text style={styles.userName}>{school.nome}</Text>
              </View>

              <View style={styles.userActions}>
                <TouchableOpacity
                  style={styles.detailsButton}
                  onPress={() => navigation.navigate("Profile", { data: school })}
                >
                  <Text>Detalhes</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      ) : (

        <LinearGradient
          colors={['#eeb600', '#f8da45', '#ffff71']}
          styles={styles.LinearGradient}>
          <Text style={styles.SemCadastro}>Não há escolas cadastradas</Text>
        </LinearGradient>
      )}
    </View>
  );
}
