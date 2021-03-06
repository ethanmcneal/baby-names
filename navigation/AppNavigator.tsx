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
import LikedNamesScreen from "../screens/LikedNamesScreen";



const colorScheme = Appearance.getColorScheme()
const navigationOptions = {
    headerStyle: {
        backgroundColor: colorScheme === 'dark' ? Colors.dark.backgroundDark : Colors.light.background,
        
    }, 
    headerTintColor: colorScheme === 'dark' ? Colors.dark.text : Colors.light.text,
    headerTitleStyle: {
    fontFamily: 'Chalkduster',

    },

}
const LikedNamesNavigator = createStackNavigator({
    "Liked Names": LikedNamesScreen
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
    "Your Names": LikedNamesNavigator
},

{
    defaultNavigationOptions: ({ navigation }) => ({
      
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName :any;
        if (routeName === 'Home') {
          iconName = focused
            ? 'ios-home'
            : 'ios-home-outline';
        } else if (routeName === 'Your Names') {
          iconName = focused ? 'ios-heart' : 'ios-heart-outline'; 
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: colorScheme == 'dark' ? Colors.dark.tabIconSelected : Colors.light.tabIconSelected,
      inactiveTintColor: colorScheme == 'dark' ? Colors.dark.tabIconDefault : Colors.light.tabIconDefault,
      activeBackgroundColor: colorScheme == 'dark' ? Colors.dark.backgroundDark : Colors.light.background,
      style: {
        backgroundColor: colorScheme === 'dark' ? Colors.dark.backgroundDark : Colors.light.background,
    },
    },
    
     
  })

export default createAppContainer(MainNavigator)