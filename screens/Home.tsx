import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Names from '../assets/data.json'
import { Text, View } from '../components/Themed';

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.separator}/>
      <Text> Baby Names</Text>
      <Text>{JSON.stringify(Names)}</Text>
      <View style={styles.separator}  />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
    backgroundColor: '#222'
  },
});
