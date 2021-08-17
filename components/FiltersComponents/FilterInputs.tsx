import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, useColorScheme, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "./Themed";
import Colors from "../constants/Colors";

const FilterInputs = (props: any) => {
	const colorScheme = useColorScheme();
	const { lastName, middleName, setLastName, setMiddleName } = props;

	const inputText = {
		color: colorScheme === "dark" ? Colors.dark.text : Colors.light.text,
		fontSize: 22,
	};
	return (
		<>
			<View style={styles.inputContainer}>
				<TextInput
					style={inputText}
					value={lastName}
					placeholder="Last Name(optional)"
					onChangeText={(text) => setLastName(text)}
				/>
				<Text>
					{lastName && (
						<TouchableOpacity onPress={() => setLastName("")}>
							<Text>
								<Ionicons
									name="ios-backspace-outline"
									color={inputText.color}
									size={25}
								/>
							</Text>
						</TouchableOpacity>
					)}
				</Text>
			</View>
			<View style={styles.inputContainer}>
				<TextInput
					style={inputText}
					value={middleName}
					placeholder="Middle Name(optional)"
					onChangeText={(text) => setMiddleName(text)}
				/>
				<Text>
					{middleName && (
						<TouchableOpacity
							onPress={() => {
								setMiddleName("");
							}}
						>
							<Text>
								<Ionicons
									name="ios-backspace-outline"
									color={inputText.color}
									size={25}
								/>
							</Text>
						</TouchableOpacity>
					)}
				</Text>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		width: "70%",
		borderBottomColor: "#ccc",
		borderBottomWidth: 1,
		marginVertical: 5,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
});

export default FilterInputs;
