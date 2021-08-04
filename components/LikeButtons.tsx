import React from 'react';
import { Ionicons } from "@expo/vector-icons";
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
import { View } from "./Themed"

const LikeButtons = (props :any) => {
    const {onRelease} = props

    const handleLike = (dx: number) => {
		onRelease(null, { dx: dx, dy: 10 });
	};
    return(
        <View style={styles.likeButtonContainer}>
				<TouchableOpacity
					onPress={() => handleLike(-121)} // pass num > 120 for like || num < -120 for dislike
				>
					<Ionicons
						name={"heart-dislike-circle-outline"}
						size={45}
						color="red"
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => handleLike(121)}>
					<Ionicons
						name={"heart-circle-outline"}
						size={45}
						color="green"
					/>
				</TouchableOpacity>
			</View>
    )
}

export default LikeButtons

const styles = StyleSheet.create({
    likeButtonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "80%",
		top: "120%",
	},
})