import { View, Text, Button, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function Detalhes() {
  const { modeloCarro } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalhes do Carro</Text>

      <Text style={styles.info}>
        Modelo selecionado: {modeloCarro}
      </Text>

      <Button title="Voltar para a vitrine" onPress={() => router.back()} />
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
  info: {
    fontSize: 18,
    marginBottom: 16
  }
});
