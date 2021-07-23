import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
	Animated,
	Button,
	Dimensions,
	PanResponder,
	StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AnimatedCard from "./AnimatedCard";
import { Text, View } from "./Themed";

const NameCard = (props: any) => {
	const { boyNames, girlNames } = props;
	const [counter, setCounter] = useState(0);
	const [gender, setGender] = useState(false); // false === boy || true === girl

	const { width, height } = Dimensions.get("window");
	let position :any = new Animated.ValueXY();
    const onRelease = (evt :any, gestureState :any) => {
        
        if (gestureState.dx > 120) {
            Animated.spring(position, {
                toValue: { x: width, y: gestureState.dy},
                useNativeDriver: false,
                bounciness: 0,
                speed: 15,
            }
            ).start(() => {
                setCounter((prevState: number) => prevState + 1),
                    () => {
                        position.setValue({ x: 0, y: 0});
                    };
            });
        } else if (gestureState.dx < -120) {
            Animated.spring(position, {
                toValue: { x: -width - 100, y: gestureState.dy}, 
                useNativeDriver: false 
            }).start(() => {
                setCounter((prevState: number) => prevState + 1),
                    () => {
                        position.setValue({ x: 0, y: 0});
                    };
            });
        } else {
            Animated.spring(position, {
               toValue: { x: 0, y: 0},
               useNativeDriver: false,
               friction: 4
               }).start(() => {
                   position.setValue({x: 0, y: 0})
               })
            }
        }

	const panResponder = PanResponder.create({
		onStartShouldSetPanResponder: (evt, gesState) => true,
		onPanResponderMove: (evt, gesState) => {
			position.setValue({ x: gesState.dx, y: gesState.dy});
		},
		onPanResponderRelease: onRelease,
	});

    const handleLike = (dx :number) => {
        onRelease(null, {dx: dx, dy:0})
    }
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
			
			<View style={styles.likeButtonContainer}>
				<TouchableOpacity
					onPress={() => handleLike(-121)} // pass a num > 120 for like || num < -120 for dislike
				>
					<Ionicons
						name={"heart-dislike-circle-outline"}
						size={45}
						color="red"
					/>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => handleLike(121)}
				>
					<Ionicons
						name={"heart-circle-outline"}
						size={45}
						color="green"
					/>
				</TouchableOpacity>
			</View>
            <AnimatedCard names={gender ? girlNames : boyNames} counter={counter}
             panResponder={panResponder} position={position} gender={gender}/>
		</View>
	);
};



const styles = StyleSheet.create({
	container: {
		width: "75%",
		alignItems: "center",
		justifyContent: "center",
	},
	
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "80%",
	},
    likeButtonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "80%", 
        top: '120%'
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
