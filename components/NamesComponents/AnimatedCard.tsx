import React from "react";
import { Animated, Dimensions, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import Colors from "../../constants/Colors";
import { Name } from "../../types";
import { Text } from "../Themed";



const { width, height } = Dimensions.get("window");

const AnimatedCard = (props: any) => {
	const filters = useSelector((state: any) => state.filters.filters);
	const { names, index, panResponder, position, gender } = props;
	const name = names.filter((name :Name) => name.id === index)[0]
	const nextName = names.filter((name :Name) => name.id === index + 1)[0]

	let rotate = position.x.interpolate({
		inputRange: [-width / 2, 0, width / 2],
		outputRange: ["-8deg", "0deg", "8deg"],
		extrapolate: "clamp",
	});
	let nextCardOpacity = position.x.interpolate({
		inputRange: [-width / 2, 0, width / 2],
		outputRange: [1, 0, 1],
		extrapolate: "clamp",
	});

	let nextCardScale = position.x.interpolate({
		inputRange: [-width / 2, 0, width / 2],
		outputRange: [1, 0.8, 1],
		extrapolate: "clamp",
	});

	const rotateAndTranslate = {
		transform: [
			{
				rotate: rotate,
			},
			...position.getTranslateTransform(),
		],
	};

    const reformat = (string :string) => {
            let rest = string.slice(1).toLowerCase()
            return string.charAt(0).toUpperCase() + rest
    } //england and wales names are in caps for some reason so I am doing this for my sake
	return (
		<>
			{nextName && (
				<Animated.View
					style={[
						{
							opacity: nextCardOpacity,
							transform: [{ scale: nextCardScale }],
						},
						gender === "girl" ? styles.girlCard : styles.boyCard,
					]}
				>
					<Text style={styles.name}>
						{reformat(nextName.name)} {filters.middleName}
						{filters.middleName && " "}
						{filters.lastName}
					</Text>
				</Animated.View>
			)}
			{name && (
				<Animated.View
					{...panResponder.panHandlers}
					style={
						gender === "girl"
							? [rotateAndTranslate, { ...styles.girlCard }]
							: [rotateAndTranslate, { ...styles.boyCard }]
					}
				>
					<Text style={styles.name}>
						{reformat(name.name)} {filters.middleName}
						{filters.middleName && " "}
						{filters.lastName}
					</Text>
				</Animated.View>
			)}
		</>
	);
};

const card: any = {
	height: 300,
	alignItems: "center",
	justifyContent: "center",
	width: "100%",
	position: "absolute",
	top: "70%",
	borderRadius: 8,
};

const styles = StyleSheet.create({
	boyCard: {
		...card,
		backgroundColor: Colors.universal.blue,
	},
	girlCard: {
		...card,
		backgroundColor: Colors.universal.pink,
	},
	name: {
		fontSize: 22,
	},
});

export default AnimatedCard;
