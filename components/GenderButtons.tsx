import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import {
	StyleSheet, useColorScheme,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View } from "./Themed";
import Colors from '../constants/Colors';

const GenderButtons = (props :any) => {

    const colorScheme = useColorScheme()

    const {gender, setIndex, setGender, nextID} = props

    const handleGenderButton = (genderChange: string) => {
		genderChange === "girl"
			? setIndex(nextID.girl - 100)
			: setIndex(nextID.boy);
		setGender(genderChange);
	};

    const backgroundColor = colorScheme === 'dark' ? "#3A3A3A" : '#cacaca'
    const backgroundColorPressed = colorScheme === 'dark' ? "#3f3f3f" : '#bfbfbf'

    return (
        <View style={styles.buttonContainer}>
				<TouchableOpacity
					style={
						gender === "boy"
							? [{...styles.genderButtonPressed}, {backgroundColor: backgroundColorPressed, borderColor: Colors.universal.blue}]
							: [{...styles.genderButton}, {backgroundColor}]
					}
					onPress={() => handleGenderButton("boy")}
				>
					<Ionicons name={"male-outline"} size={40} color={Colors.universal.blue} />
				</TouchableOpacity>
				<TouchableOpacity
					style={
						gender === "girl"
							? [{...styles.genderButtonPressed}, {backgroundColor:backgroundColorPressed, borderColor: Colors.universal.pink}]
							: [{...styles.genderButton}, {backgroundColor}]
					}
					onPress={() => handleGenderButton("girl")}
				>
					<Ionicons name={"female-outline"} size={40} color={Colors.universal.pink} />
				</TouchableOpacity>
			</View>
    )
}

export default GenderButtons


const styles = StyleSheet.create({
    buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "80%",
        borderBottomWidth: 1,
        borderBottomColor: 'white'
	},
    genderButton: {
		padding: 7,
		borderRadius: 8,
		marginBottom: 10,
	},
	genderButtonPressed: {
		padding: 6.5,
		borderWidth: 1,
		borderColor: "black",
		borderRadius: 8,
		marginBottom: 10,
	},

})