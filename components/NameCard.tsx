import { Ionicons } from "@expo/vector-icons";
import React, { useCallback, useEffect, useState } from "react";
import {
	Animated,
	Button,
	Dimensions,
	PanResponder,
	StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import AnimatedCard from "./AnimatedCard";
import { View } from "./Themed";
import * as nameActions from "../store/actions/name";
import { Name } from "../types";
import GenderButtons from "./GenderButtons";

const NameCard = (props: any) => {
	const names = useSelector((state: any) => state.names.names);
	const nextID = useSelector((state: any) => state.names.lastInteractedId);
	const [index, setIndex] = useState(0);
	const [gender, setGender] = useState("boy"); // false === boy || true === girl
	const dispatch = useDispatch();

	const { width, height } = Dimensions.get("window");

	const handleSwipe = (action: any) => {
		dispatch(
			action(
				gender === "girl"
					? names.girlNames[index]
					: names.boyNames[index],
			),
		);
	};

	let position: any = new Animated.ValueXY();
	const onRelease = (evt: any, gestureState: any) => {
		if (gestureState.dx > 120) {
			setIndex((prev) => prev + 1),
				handleSwipe(nameActions.likeName),
				Animated.spring(position, {
					toValue: { x: width + 100, y: gestureState.dy },
					useNativeDriver: false,
					speed: 10,
				}).start(() => {
					() => {
						position.setValue({ x: 0, y: 0 });
					};
				});
		} else if (gestureState.dx < -120) {
			setIndex((prev) => prev + 1),
				handleSwipe(nameActions.dislikeName),
				Animated.spring(position, {
					toValue: { x: -width - 100, y: gestureState.dy },
					useNativeDriver: false,
					speed: 10,
				}).start(() => {
					() => {
						position.setValue({ x: 0, y: 0 });
					};
				});
		} else {
			Animated.spring(position, {
				toValue: { x: 0, y: 0 },
				useNativeDriver: false,
				bounciness: 2,
			}).start(() => {
				position.setValue({ x: 0, y: 0 });
			});
		}
	};

	const panResponder = PanResponder.create({
		onStartShouldSetPanResponder: (evt, gesState) => true,
		onPanResponderMove: (evt, gesState) => {
			position.setValue({ x: gesState.dx, y: gesState.dy });
		},
		onPanResponderRelease: onRelease,
	});

	const handleLike = (dx: number) => {
		onRelease(null, { dx: dx, dy: 10 });
	};


	return (
		<View style={styles.container}>
		<GenderButtons gender={gender} setIndex={setIndex} setGender={setGender} nextID={nextID}/>
			
			{gender == "girl" ? (
				<AnimatedCard
					names={names.girlNames}
					index={index}
					panResponder={panResponder}
					position={position}
					gender={gender}
				/>
			) : (
				<AnimatedCard
					names={names.boyNames}
					index={index}
					panResponder={panResponder}
					position={position}
					gender={gender}
				/>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "75%",
		alignItems: "center",
		justifyContent: "center",
	},
	likeButtonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "80%",
		top: "120%",
	},
});

export default NameCard;
