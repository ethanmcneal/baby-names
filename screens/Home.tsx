import * as React from 'react';
import { Appearance, Button, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector, useStore } from 'react-redux';
import Names from '../assets/data.json'
import NameCard from '../components/NameCard';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { NameState } from '../types';
const colorScheme = Appearance.getColorScheme()

export default function Home(props :any) {
  const boyNames = useSelector((state :any) => state.names.boyNames)
  const girlNames = useSelector((state :any) => state.names.girlNames)

  return (
      <View style={styles.screen}>
    <View style={styles.container}>
      <Text> Baby Names</Text>
      <NameCard boyNames={boyNames} girlNames={girlNames}/>
    </View>
    <View>
    <Button title='liked names' onPress={() => {props.navigation.navigate('Liked Names')}}/>
    </View>
      </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    backgroundColor: colorScheme === 'dark' ? Colors.dark.background : Colors.light.background
  },
  container: {
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
