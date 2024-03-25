import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';

import styles from "./styles";
import Title from "../../components/Title";
import usersRepository from "../../models/user/SchoolRepository";

export default function Users() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    if (isFocused) {
      const users = usersRepository.getAll();
      setAllUsers(users);
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

      {allUsers.length > 0 ? (
        <View style={styles.userList}>
          {allUsers.map((user) => (
            <View key={user.id} style={styles.userItem}>
              <View>
                <Text style={styles.userName}>{user.name}</Text>
              </View>

              <View style={styles.userActions}>
                <TouchableOpacity
                  style={styles.detailsButton}
                  onPress={() => navigation.navigate("Profile", { data: user })}
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
