import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector, useStore } from 'react-redux';
import Names from '../assets/data.json'
import NameCard from '../components/NameCard';
import { Text, View } from '../components/Themed';
import { NameState } from '../types';

export default function Home() {
  const names = useSelector((state :any) => state.names.names)
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.separator}/>
      <Text> Baby Names</Text>
      <NameCard names={names}/>
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
