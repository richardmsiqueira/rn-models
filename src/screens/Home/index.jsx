import { Text, View, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import styles from "./styles";
import Title from "../../components/Title";

export default function Home() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#eeb600', '#f8da45', '#ffff71']}
        styles={styles.LinearGradient}>
        <Title style={styles.title} title="Seja Bem Vindo a Hogwarts" />
      </LinearGradient>

      <View>
        <Image
          style={styles.Hogwarts}
          source={require('../../../assets/Hogwarts.jpg')}
        />

        <LinearGradient

          colors={['#eeb600', '#f8da45', '#ffff71']}
          styles={styles.LinearGradientDescricao}>
          <Text style={styles.DescricaoHogwarts}>A Escola de Magia e Bruxaria de Hogwarts, ou simplesmente Hogwarts, é um prestigiado internato britânico de magia para bruxos e bruxas com idades entre onze e dezessete anos. Localizada nas Altas Terras escocesas, aceita estudantes da Grã-Bretanha e da Irlanda. E agora estamos criando filiais por toda a região e aumentando suas chances de ser um aluno de Hogwarts. Aqui você vai poder cadastrar sua filia de Hogwarts, editar e excluí la.</Text>
        </LinearGradient>
      </View>
    </View>
  );
}
