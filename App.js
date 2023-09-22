import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const nomes = [
  'Ana Maria',
  'Bruno Alves',
  'Carlos José',
  'Daniel Martins',
  'Efraim Gomes',
  'Francisco Junior',
];

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Nomes</Text>
      <FlatList
        data={nomes}
        renderItem={({ item }) => (
          <View style={styles.nomeItem}>
            <Text style={styles.nomeText}>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  nomeItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    width: 300,
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  nomeText: {
    fontSize: 18,
    color: '#333',
  },
});

export default App;
