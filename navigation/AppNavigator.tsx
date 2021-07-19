import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Home from "../screens/Home";
import MyComponents from "../screens/MyComponents";
import SquareCardInfo from "../components/myComponents/componentInfo/SquareCardInfo";
import CenterViewInfo from "../components/myComponents/componentInfo/CenterViewInfo";
import { Ionicons } from "@expo/vector-icons";
import React from 'react'
import { useThemeColor } from "../components/Themed";
import { Appearance } from "react-native";
import Colors from "../constants/Colors";



const colorScheme = Appearance.getColorScheme()
const navigationOptions = {
    headerStyle: {
        backgroundColor: colorScheme === 'dark' ? Colors.dark.background : Colors.light.background,
        
    }, 
    headerTintColor: colorScheme === 'dark' ? Colors.dark.text : Colors.light.text
}
const ComponentNavigator = createStackNavigator({
    MyComponents: MyComponents,
    SquareCard: SquareCardInfo,
    CenterView: CenterViewInfo
},  {
    defaultNavigationOptions: navigationOptions
})

const HomeNavigator = createStackNavigator({
    Home: Home,
}, {
    defaultNavigationOptions: navigationOptions
})

const MainNavigator = createBottomTabNavigator({
    Home: HomeNavigator,
    Components: ComponentNavigator
},

{
    defaultNavigationOptions: ({ navigation }) => ({
      
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName :any;
        if (routeName === 'Home') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (routeName === 'Components') {
          iconName = focused ? 'ios-list-circle' : 'ios-list-circle-outline'; 
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: colorScheme == 'dark' ? Colors.dark.tabIconSelected : Colors.light.tabIconSelected,
      inactiveTintColor: colorScheme == 'dark' ? Colors.dark.tabIconDefault : Colors.light.tabIconDefault,
      activeBackgroundColor: colorScheme == 'dark' ? Colors.dark.background : Colors.light.background,
      style: {
        backgroundColor: colorScheme === 'dark' ? Colors.dark.background : Colors.light.background,
    },
    },
    
     
  })

export default createAppContainer(MainNavigator)