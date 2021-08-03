import React, { useEffect, useState } from "react";
import { Animated, Dimensions, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Name } from "../types";
import { Text, View } from "./Themed";

const { width, height } = Dimensions.get("window");

const AnimatedCard = (props: any) => {
	const filters = useSelector((state: any) => state.filters.filters);
	const { names, index, panResponder, position, gender } = props;
	const name = names[index];
	const nextName = names[index + 1];

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
	return (
		<>
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
					{nextName.name} {filters.middleName}
					{filters.middleName && " "}
					{filters.lastName}
				</Text>
			</Animated.View>
			<Animated.View
				{...panResponder.panHandlers}
				// key={babyName.id}
				style={
					gender === "girl"
						? [rotateAndTranslate, { ...styles.girlCard }]
						: [rotateAndTranslate, { ...styles.boyCard }]
				}
			>
				<Text style={styles.name}>
					{name.name} {filters.middleName}
					{filters.middleName && " "}
					{filters.lastName}
				</Text>
			</Animated.View>
			
		</>
    )}

const card: any = {
	height: 300,
	alignItems: "center",
	justifyContent: "center",
	width: "100%",
	position: "absolute",
	top: "70%",
	borderRadius: 12,
};

const styles = StyleSheet.create({
	boyCard: {
		...card,
		backgroundColor: "#05BCEE",
	},
	girlCard: {
		...card,
		backgroundColor: "pink",
	},
	name: {
		fontSize: 22,
	},
});

export default AnimatedCard;
