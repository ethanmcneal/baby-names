import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import {
	Animated,
	Button,
	Dimensions,
	PanResponder,
	StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import AnimatedCard from "./AnimatedCard";
import { View } from "./Themed";
import * as nameActions from "../store/actions/name";
import { Name } from "../types";

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
					<Ionicons name={"male-outline"} size={40} color="blue" />
				</TouchableOpacity>
				<TouchableOpacity
					style={
						gender === "girl"
							? styles.genderButtonPressed
							: styles.genderButton
					}
					onPress={() => handleGenderButton("girl")}
				>
					<Ionicons name={"female-outline"} size={40} color="pink" />
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
	},
    genderButton: {
		padding: 5,
		borderWidth: 1,
		borderColor: "#ccc",
		backgroundColor: "#eee",
		shadowOpacity: 0.4,
		shadowColor: "#222",
		shadowOffset: { height: 0, width: 0.1 },
		borderRadius: 8,
		marginBottom: 10,
	},
	genderButtonPressed: {
		padding: 5,
		borderWidth: 2,
		borderColor: "#ccc",
		backgroundColor: "#bfbfbf",
		borderRadius: 8,
		marginBottom: 10,
	},

})