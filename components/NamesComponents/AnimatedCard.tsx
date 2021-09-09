import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Animated, Dimensions, StyleSheet, View } from "react-native";
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

	let likeIconOpacity = position.x.interpolate({
		inputRange: [-width / 2, 0, width / 2],
		outputRange: [0, 0, 1],
		extrapolate: "clamp",
	});

	let dislikeIconOpacity = position.x.interpolate({
		inputRange: [-width / 2, 0, width / 2],
		outputRange: [1, 0, 0],
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
					<Animated.View style={[styles.likeIcon, {opacity: likeIconOpacity}]}>
						<Text style={styles.likeText}>LIKE!</Text>
						<Ionicons name='thumbs-up-outline' color='#acf1af' size={48}/>
					</Animated.View>
					<Animated.View style={[styles.dislikeIcon, {opacity: dislikeIconOpacity}]}>
						<Text style={styles.dislikeText}>NO THANKS!</Text>
						<Ionicons name='thumbs-down-outline' color='#FF0000' size={48}/>
					</Animated.View>
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
	height: height / 2.5,
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
	likeIcon: {
		position: 'absolute',
		top: '10%',
		left: '13%',
		transform: [{rotateZ: '-20deg'}]
	},
	likeText: {
		color: '#acf1af'
	},
	dislikeIcon: {
		position: 'absolute',
		top: '11%',
		right: '13%',
		transform: [{rotateZ: '20deg'}],
		alignItems: 'center'
	},
	dislikeText: {
		color: '#FF0000'
	},
});

export default AnimatedCard;
