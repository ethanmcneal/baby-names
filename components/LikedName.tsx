import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, useColorScheme } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import Colors from "../constants/Colors";
import { Text, View } from "./Themed";

const LikedName = (props: any) => {
	const filters = useSelector((state: any) => state.filters.filters);
    const [showDetails, setShowDetails] = useState(false)
	const color =
		props.nameData.item.gender === "girl"
			? Colors.universal.pink
			: Colors.universal.blue;
	return (
        <>
		<View style={styles.nameRow}>
			<Text style={[{ ...styles.name }, { color }]}>
				{props.nameData.item.name} {filters.middleName && " "}
				{filters.lastName}
			</Text>
            <TouchableOpacity onPress={() => setShowDetails(!showDetails)}>
                <Ionicons name={showDetails ? 'chevron-up' : 'chevron-down'} color={color} size={22}/>
            </TouchableOpacity>
		</View>
        </>
	);
};

export default LikedName;

const styles = StyleSheet.create({
	nameRow: {
		flexDirection: "row",
		padding: 15,
		justifyContent: "space-between",
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
	},
	name: {
		fontSize: 22,
	},
});
