import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, useColorScheme } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import Colors from "../../constants/Colors";
import { Text, View } from "../Themed";
import * as nameActions from '../../store/actions/name'

const reformat = (string :string) => {
	let rest = string.slice(1).toLowerCase()
	return string.charAt(0).toUpperCase() + rest
}

const LikedName = (props: any) => {
	const filters = useSelector((state: any) => state.filters.filters);
	const [showDetails, setShowDetails] = useState(false);
	const dispatch = useDispatch()
	const color =
		props.nameData.item.gender === "girl"
			? Colors.universal.pink
			: Colors.universal.blue;
	return (
		<View style={styles.nameContainer}>
			<TouchableOpacity onPress={() => setShowDetails(!showDetails)}>
				<View style={styles.nameRow}>
					<Text style={[{ ...styles.name }, { color }]}>
						{reformat(props.nameData.item.name)}
						{filters.middleName && " "}
						{filters.lastName}
					</Text>
					<Ionicons
						name={showDetails ? "chevron-up" : "chevron-down"}
						color={color}
						size={22}
					/>
				</View>
			</TouchableOpacity>
			{showDetails && (
				<View style={styles.details}>
					<TouchableOpacity
						onPress={() => dispatch(nameActions.unlikeName(props.nameData.item.id))}
					>
						<Ionicons name={"close"} color="red" size={42} />
					</TouchableOpacity>
				</View>
			)}
		</View>
	);
};

export default LikedName;

const styles = StyleSheet.create({
	nameContainer: {
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
	},
	nameRow: {
		flexDirection: "row",
		padding: 15,
		justifyContent: "space-between",
	},
	name: {
		fontSize: 22,
	},
	details: {
		alignItems: "center",
		justifyContent: "center",
	},
});
