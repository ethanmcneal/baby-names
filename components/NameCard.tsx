
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
	Animated,
	Button,
	Dimensions,
	PanResponder,
	StyleSheet,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Name } from "../types";
import { Text, View } from "./Themed";

//transformation: rotateZ: (-a,a), translateY (y), translateX(-A,A)
//sin(a) = a1/h
//a1 = hsin(a)

//cos(a) = a1/w,
//a1
const NameCard = (props: any) => {
	const { boyNames, girlNames } = props;
	const [counter, setCounter] = useState(0);
	const [gender, setGender] = useState(false); // false === boy || true === girl

	const { width, height } = Dimensions.get("window");
	let position = new Animated.ValueXY

	const panResponder = PanResponder.create({
		onStartShouldSetPanResponder: (evt, gesState) => true,
		onPanResponderMove: (evt, gesState) => {
			position.setValue({ x: gesState.dx, y: gesState.dy });
		},
	    onPanResponderRelease: (evt, gesState) => {},
		});


	return (
		<View style={styles.container}>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={
						gender
							? styles.genderButton
							: styles.genderButtonPressed
					}
					onPress={() => setGender(false)}
				>
					<Ionicons name={"male-outline"} size={40} color="blue" />
				</TouchableOpacity>
				<TouchableOpacity
					style={
						!gender
							? styles.genderButton
							: styles.genderButtonPressed
					}
					onPress={() => setGender(true)}
				>
					<Ionicons name={"female-outline"} size={40} color="pink" />
				</TouchableOpacity>
			</View>
			{boyNames
				.map((babyName: Name, i :number) => {
                    if(i < counter){return null;}
                    else if(i === counter){
                        return(

					<Animated.View
						{...panResponder.panHandlers}
						key={babyName.id}
						style={[
							{ transform: position.getTranslateTransform() },
							{ ...styles.boyCard },
						]}
					>
						<Text style={styles.name}>{babyName.name}</Text>
					</Animated.View>)} else {
                        return (
                            <Animated.View
						key={babyName.id}
						style={styles.boyCard}>
						<Text style={styles.name}>{babyName.name}</Text>
					</Animated.View>
                        )
                    }
                })
				.reverse()}
			{/* <View style={styles.buttonContainer}>
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
			</View> */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "75%",
		alignItems: "center",
		justifyContent: "center",
	},
	girlCard: {
		height: 300,
		backgroundColor: "pink",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		position: "absolute",
	},
	boyCard: {
		height: 300,
		backgroundColor: "#05BCEE",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		position: "absolute",
        top: '50%',
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
		backgroundColor: "#bfbfbf",
		borderRadius: 8,
		marginBottom: 10,
	},
});

export default NameCard;
