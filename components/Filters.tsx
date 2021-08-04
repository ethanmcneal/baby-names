import React, { useState } from "react";
import { Button, StyleSheet, TextInput, useColorScheme } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Text, View } from "./Themed";
import * as filterActions from "../store/actions/filters";
import Colors from "../constants/Colors";


const Filters = (props: any) => {
	const filters = useSelector((state: any) => state.filters.filters);
	const [lastName, setLastName] = useState(
        filters ? filters.lastName : ""
    );
	const [middleName, setMiddleName] = useState(
		filters ? filters.middleName : "",
	);
	const dispatch = useDispatch();

	const saveFilters = () => {
		dispatch(
			filterActions.createFilter({
				lastName: lastName,
				middleName: middleName,
			}),
		);
		props.setShowFilter(false);
	};

	const colorScheme = useColorScheme()


	const inputText = {
		color: colorScheme === 'dark' ? Colors.dark.text : Colors.light.text,
		fontSize: 22,
	}
	return (
		<View style={styles.container}>
			<Text style={styles.headerText}>Filters</Text>
			<View style={styles.inputContainer}>
				<TextInput
				style={inputText}
					value={lastName}
					placeholder="Last Name(optional)"
					onChangeText={(text) => setLastName(text)}
				/>
			</View>
			<View style={styles.inputContainer}>
				<TextInput
					style={inputText}
					value={middleName}
					placeholder="Middle Name(optional)"
					onChangeText={(text) => setMiddleName(text)}
				/>
			</View>
			<View style={styles.buttonContainer}>
				<Button title="Clear" onPress={() => {}} />
				<Button title="Save" onPress={() => saveFilters()} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	headerText: {
		fontSize: 18,
	},
	inputContainer: {
		width: "70%",
		borderBottomColor: "#ccc",
		borderBottomWidth: 1,
		marginVertical: 5,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
});
export default Filters;
