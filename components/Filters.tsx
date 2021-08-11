import React, { useState } from "react";
import { Button, StyleSheet, TextInput, useColorScheme } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Text, View } from "./Themed";
import * as filterActions from "../store/actions/filters";
import * as nameActions from "../store/actions/name";
import Colors from "../constants/Colors";
import CountryDropdown from "./CountryDropdown";
import { NameState } from "../types";


const Filters = (props: any) => {
	const filters = useSelector((state: any) => state.filters.filters);
	const currentCountry = useSelector((state :any) => state.names.country)
	const prevID = useSelector((state :any) => state.names.previousIDState) //previousIDState
	const [showDropdown, setShowDropdown] = useState(false)
	const [country, setCountry] = useState(currentCountry);
	const [lastName, setLastName] = useState(
        filters ? filters.lastName : ""
    );
	const [middleName, setMiddleName] = useState(
		filters ? filters.middleName : "",
	);
	const dispatch = useDispatch();


	const saveFilters = async() => {
		dispatch(
			filterActions.createFilter({
				lastName: lastName,
				middleName: middleName,
			}),
		);
		if(showDropdown){
			try {
				await dispatch(nameActions.changeCountry(country))
				props.setIndex(prevID[country][props.gender] +1)	
			} catch (error) {
				console.log(error)
			}
		}
		setShowDropdown(false)
		props.setShowFilter(false);
	};

	const handleCountryChange = () => {
		setShowDropdown(!showDropdown)
	}

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
			{ showDropdown && <CountryDropdown colorScheme={colorScheme} country={country} setCountry={setCountry}/>}
			<View style={styles.buttonContainer}>
				<Button title="Save" onPress={() => saveFilters()} />
				{showDropdown && <Button title="Cancel" onPress={() => {setShowDropdown(false)}} />}
				{ !showDropdown && <Button title="Change Country" onPress={() => handleCountryChange()}/>}
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
