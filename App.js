import { View, TextInput, StyleSheet, Button, TouchableOpacity, Text } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Digite algo" />
      <Button title="Button" onPress={() => alert("Saved!")} />
      <TouchableOpacity onPress={() => alert("Saved!")} style={styles.button}>
        <Text style={styles.textButtonTO}>TouchableOpacity</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '50%',
    height: 40,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 8,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#f00',
    padding: 10,
    borderRadius: 15,
    margin: 10,
  },
  textButtonTO: {
    color: 'white',
  },
});