import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import {
    Dimensions,
	StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View } from "./Themed"

const { width, height } = Dimensions.get("window");


const LikeButtons = (props :any) => {
    const {onRelease} = props

    const handleLike = (dx: number) => {
		onRelease(null, { dx: dx, dy: 0 });
	};
    return(
        <View style={styles.likeButtonContainer}>
				<TouchableOpacity
                style={styles.button}
					onPress={() => handleLike(-121)} // pass num > 120 for like || num < -120 for dislike
				>
					<Ionicons
						name={"heart-dislike"}
						size={55}
						color="#FF0000"
					/>
				</TouchableOpacity>
				<TouchableOpacity 
                style={styles.button}
                onPress={() => handleLike(121)}>
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
		justifyContent: "center",
		width: "100%",
		top: height / 2.4,
        // backgroundColor: '#999',
        paddingVertical: 10,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
	},
    button: {
        marginHorizontal: width / 5.5,
    }
})