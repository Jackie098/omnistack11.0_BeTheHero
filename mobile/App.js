import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Omnistack 11.0</Text>
      <Text style={styles.title}>Hello Omnistack 11.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159CE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  },
});
