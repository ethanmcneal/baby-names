import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Appearance, Button, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useStore } from 'react-redux';
import Names from '../assets/data.json'
import Filters from '../components/Filters';
import CustomHeaderButton from '../components/HeaderButtonComponent';
import NameCard from '../components/NameCard';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
const colorScheme = Appearance.getColorScheme()

export default function Home(props :any) {
  const names = useSelector((state :any) => state.names.names)
  const [showFilters, setShowFilter] = React.useState(false)

  const filterButtonHandler = React.useCallback(() => {
    setShowFilter(!showFilters)
  },[setShowFilter, showFilters])

  React.useEffect(() => {
    props.navigation.setParams({"filtersButton": filterButtonHandler,})
  },[filterButtonHandler])
    return (
      <View style={styles.screen}>
    <View style={styles.container}>
      {showFilters && <Filters setShowFilter={setShowFilter}/>}
      <Text> Baby Names</Text>
      <NameCard names={names}/>
    </View>
      </View>
  );
}

Home.navigationOptions = (navData: any) => {

	return {
		headerTitle: "Home",
		headerRight: () => {
			return (
				<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
					<Item
						title="Menu"
						iconName={"ios-menu"}
						onPress={() => {
              navData.navigation.getParam("filtersButton")()
						}}
					/>
				</HeaderButtons>
			);
		}
    }
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
