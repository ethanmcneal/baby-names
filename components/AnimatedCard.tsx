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
import { Value } from "react-native-reanimated";
import { Name } from "../types";
import { Text, View } from "./Themed";


const { width, height } = Dimensions.get("window");


const AnimatedCard = (props :any) => {
    
    const {names, counter, panResponder, position, gender} = props

    let rotate = position.x.interpolate({
		inputRange: [-width / 2, 0, width / 2],
		outputRange: ["-15deg", "0deg", "15deg"],
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

    return (names.map((babyName :Name, i: number) => {
        if (i < counter) {
            return null;
        } else if (i === counter) {
            return (
                <Animated.View
                    {...panResponder.panHandlers}
                    key={babyName.id}
                    style={gender ? 
                       [ rotateAndTranslate,
                        { ...styles.girlCard },
                    ] : [
                        rotateAndTranslate,
                        { ...styles.boyCard },
                    ]}
                >
                    <Text style={styles.name}>{babyName.name}</Text>
                </Animated.View>
            );
        } else {
            return (
                <Animated.View
                    key={babyName.id}
                    style={[
                        {
                            opacity: nextCardOpacity,
                            transform: [{ scale: nextCardScale }],
                        },
                        gender ? styles.girlCard : styles.boyCard,
                    ]}
                >
                    <Text style={styles.name}>{babyName.name}</Text>
                </Animated.View>
            );
        }
    })
    .reverse())
}

    const card :any = {
        height: 300,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        position: "absolute",
        top: "70%",
        borderRadius: 12,
}

    const styles = StyleSheet.create({
        boyCard: {
            ...card,
            backgroundColor: "#05BCEE"
        },
        girlCard: {
            ...card,
            backgroundColor: 'pink'
        },
        name: {
            fontSize: 22,
        },
    })

    export default AnimatedCard