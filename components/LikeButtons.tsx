import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import {
	StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View } from "./Themed"

const LikeButtons = (props :any) => {
    const {onRelease} = props

    const handleLike = (dx: number) => {
		onRelease(null, { dx: dx, dy: 0 });
	};
    return(
        <View style={styles.likeButtonContainer}>
				<TouchableOpacity
					onPress={() => handleLike(-121)} // pass num > 120 for like || num < -120 for dislike
				>
					<Ionicons
						name={"heart-dislike"}
						size={55}
						color="#FF0000"
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => handleLike(121)}>
					<Ionicons
						name={"heart"}
						size={55}
						color="#acf1af"
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
		width: "90%",
		top: "120%",
       
	},
})