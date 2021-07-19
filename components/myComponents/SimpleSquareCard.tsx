import React from "react";
import { StyleSheet} from "react-native";
import {Text} from '../Themed'
import { TouchableOpacity } from "react-native-gesture-handler";

const SimpleSquareCard = (props :any) => {
    // color == null ? color = '#229' : color = color
	return (
		<TouchableOpacity
			style={{ ...styles.card, ...props.style, backgroundColor:props.color }}
			onPress={props.onPress}>
			<Text style={{...styles.text, ...props.style, color:props.textColor}}>{props.children}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	card: {
		width: 110,
		height: 110,
		borderRadius: 12,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginHorizontal: 25,
        marginVertical: 10,
	},
    text:{
        margin: 5,
        fontSize: 16,
    }
});
export default SimpleSquareCard;
