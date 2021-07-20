import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Button, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Name } from "../types";
import { Text, View } from "./Themed";

const NameCard = (props: any) => {
	const { names } = props;
	const [counter, setCounter] = useState(0);

	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<Text style={styles.name}>{names[counter].name}</Text>
			</View>
			<View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => setCounter(prev => prev + 1)}>
                    <Ionicons name={'heart-dislike-circle-outline'} size={40} color='red'/>
                    <Text>Dislike</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setCounter(prev => prev + 1)}>
                    <Ionicons name={'heart-circle-outline'} size={40} color='green'/>
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
        width: '100%'
	},
	name: {
		fontSize: 22,
	},
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
    }
});

export default NameCard;
