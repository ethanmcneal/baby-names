import React, { useState } from "react";
import { Button, StyleSheet, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Text, View } from "./Themed";
import * as filterActions from "../store/actions/filters";

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
	return (
		<View style={styles.container}>
			<Text>Filters</Text>
			<View style={styles.inputContainer}>
				<TextInput
					value={lastName}
					placeholder="Last Name(optional)"
					onChangeText={(text) => setLastName(text)}
				/>
			</View>
			<View style={styles.inputContainer}>
				<TextInput
					value={middleName}
					placeholder="Middle Name(optional)"
					onChangeText={(text) => setMiddleName(text)}
				/>
			</View>
			<View style={styles.buttonContainer}>
				<Button title="Save" onPress={() => saveFilters()} />
				<Button title="Clear" onPress={() => {}} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
		borderColor: "#ddd",
	},
	inputContainer: {
		width: "50%",
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
