import { View, Text, Image, Button, StyleSheet, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [modelo, setModelo] = useState("");

  function verDetalhes() {
    router.push({
      pathname: "/detalhes",
      params: { modeloCarro: modelo || "Carro Padrão" }
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Vitrine de Carros</Text>

      <Image
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/741/741407.png" }}
        style={styles.imagem}
      />

      <Text style={styles.label}>Digite o modelo do carro:</Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: Corolla"
        value={modelo}
        onChangeText={setModelo}
      />

      <Button title="Ver detalhes" onPress={verDetalhes} />
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
    marginBottom: 16
  },
  imagem: {
    width: 140,
    height: 140,
    marginBottom: 16
  },
  label: {
    fontSize: 16,
    marginBottom: 6
  },
  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 6,
    padding: 8,
    marginBottom: 12
  }
});
