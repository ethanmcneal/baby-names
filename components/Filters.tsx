import React, { useState } from "react";
import { Button, StyleSheet, TextInput } from "react-native";
import { useSelector } from "react-redux";
import { Text, View } from "./Themed";

const Filters = (props: any) => {
    const filters = useSelector((state :any) => state.filters.filters)
	const [lastName, setLastName] = useState(filters ? filters.lastName : "");
	const [middleName, setMiddleName] = useState(filters ? filters.middleName : "");
    

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
            <View style={styles.buttonContainer}>
                <Button title='Save' onPress={() => {}}/>
                <Button title='Clear' onPress={() => {}}/>

            </View>
		</View>
	);
};


const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
export default Filters;
