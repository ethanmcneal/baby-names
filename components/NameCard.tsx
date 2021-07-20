import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Button, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Name } from "../types";
import { Text, View } from "./Themed";

const NameCard = (props: any) => {
	const { boyNames, girlNames } = props;
	const [counter, setCounter] = useState(0);
	const [gender, setGender] = useState(false); // false === boy || true === girl
	return (
		<View style={styles.container}>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={
						gender
							? styles.genderButton
							: styles.genderButtonPressed
					}
					onPress={() => setCounter((prev) => prev + 1)}
				>
					<Ionicons name={"male-outline"} size={40} color="blue" />
				</TouchableOpacity>
				<TouchableOpacity
					style={
						!gender
							? styles.genderButton
							: styles.genderButtonPressed
					}
					onPress={() => setCounter((prev) => prev + 1)}
				>
					<Ionicons name={"female-outline"} size={40} color="pink" />
				</TouchableOpacity>
			</View>
			<View style={styles.card}>
				<Text style={styles.name}>
					{gender ? girlNames[counter].name : boyNames[counter].name}
				</Text>
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					onPress={() => setCounter((prev) => prev + 1)}
				>
					<Ionicons
						name={"heart-dislike-circle-outline"}
						size={40}
						color="red"
					/>
					<Text>Dislike</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => setCounter((prev) => prev + 1)}
				>
					<Ionicons
						name={"heart-circle-outline"}
						size={40}
						color="green"
					/>
					<Text>Like</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "75%",
		alignItems: "center",
		justifyContent: "center",
	},
	card: {
		height: 300,
		backgroundColor: "pink",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
	},
	name: {
		fontSize: 22,
	},
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
		backgroundColor: "#bbb",
		borderRadius: 8,
		marginBottom: 10,
	},
});

export default NameCard;
