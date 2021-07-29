import React, { useState } from "react";
import { TextInput } from "react-native";
import { Text, View } from "./Themed";

const Filters = (props: any) => {
	const [lastName, setLastName] = useState("");
	const [middleName, setMiddleName] = useState("");

	return (
		<View>
			<Text>Filters</Text>
			<View>
				<TextInput
					value={lastName}
					placeholder="Last Name(optional)"
					onChangeText={(text) => setLastName(text)}
				/>
			</View>
			<View>
				<TextInput
					value={middleName}
					placeholder="Middle Name(optional)"
					onChangeText={(text) => setMiddleName(text)}
				/>
			</View>
		</View>
	);
};

export default Filters;
