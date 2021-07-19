import React from "react";
import { StyleSheet, Text,} from "react-native";
import {View} from '../components/Themed'
import SimpleSquareCard from "../components/myComponents/SimpleSquareCard";


const MyComponents = (props :any) => {
    return(
        <View style={styles.screen}>
        <View style={styles.cardContainer}>
        <SimpleSquareCard color='#8a5b53' textColor='white' onPress={() =>props.navigation.navigate('SquareCard')}>
            Square Card
        </SimpleSquareCard>
        <SimpleSquareCard color='#8a88b2' textColor='white' onPress={() => props.navigation.navigate('CenterView')}>
            CenterView
        </SimpleSquareCard>

        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: 20,
    },
})

export default MyComponents