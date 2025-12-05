import { View, Text, Image, Button, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function Detalhes() {
  const { modeloCarro } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalhes do Veículo</Text>

      <Image
        source={require("../assets/images/Fusca.png")}
        style={styles.imagem}
      />

      <Text style={styles.info}>Modelo: {modeloCarro}</Text>
      <Text style={styles.info}>Status: Disponível</Text>
      <Text style={styles.info}>Preço estimado: R$ 45.000,00</Text>

      <Button title="Voltar ao catálogo" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12
  },
  imagem: {
    width: 220,
    height: 150,
    resizeMode: "contain",
    marginBottom: 16
  },
  info: {
    fontSize: 18,
    marginBottom: 6
  }
});
