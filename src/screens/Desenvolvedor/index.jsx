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
        <Title style={styles.title} title="Um Pouco Sobre o Mestre Dos Magos (eu😎)" />
      </LinearGradient>

      <View>
        <Image
          style={styles.eu}
          source={require('../../../assets/eu.jpg')}
        />

        <LinearGradient

          colors={['#eeb600', '#f8da45', '#ffff71']}
          styles={styles.LinearGradientDescricao}>
          <Text style={styles.DescricaoHogwarts}>Meu nome é Richard Macedo Siquiera, nascido em Campinas SP, 02/06/2007. Sou um desenvolvedor de sistemas no SENAI Valinhos, desenvolvi esse site para poder cadastrar filiais de escolas de magias á Hogwarts.</Text>
        </LinearGradient>

        <Image
          style={styles.mestre}
          source={require('../../../assets/mestreDosMagos.webp')}
        />
      </View>
    </View>
  );
}
