import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import {
	StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View } from "./Themed";
import Colors from '../constants/Colors';

const GenderButtons = (props :any) => {

    const {gender, setIndex, setGender, nextID} = props

    const handleGenderButton = (genderChange: string) => {
		genderChange === "girl"
			? setIndex(nextID.girl - 100)
			: setIndex(nextID.boy);
		setGender(genderChange);
	};
    return (
        <View style={styles.buttonContainer}>
				<TouchableOpacity
					style={
						gender === "boy"
							? styles.genderButtonPressed
							: styles.genderButton
					}
					onPress={() => handleGenderButton("boy")}
				>
					<Ionicons name={"male-outline"} size={40} color={Colors.universal.blue} />
				</TouchableOpacity>
				<TouchableOpacity
					style={
						gender === "girl"
							? styles.genderButtonPressed
							: styles.genderButton
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
		padding: 5,
		borderWidth: .5,
		borderColor: "#ccc",
		backgroundColor: "#3A3A3A",
		shadowOpacity: 0.4,
		shadowColor: "#222",
		shadowOffset: { height: 0, width: 0.1 },
		borderRadius: 8,
		marginBottom: 10,
	},
	genderButtonPressed: {
		padding: 7,
		borderWidth: 2,
		borderColor: "#ccc",
		backgroundColor: "#333",
		borderRadius: 8,
		marginBottom: 10,
	},

})