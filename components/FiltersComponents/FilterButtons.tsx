import React from "react";
import { Button, StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";

const FilterButtons = (props: any) => {
	const { showDropdown, setShowDropdown, handleCountryChange, saveFilters } =
		props;
	return (
		<View style={styles.buttonContainer}>
			<Button
				title="Save"
				onPress={() => saveFilters()}
				color={Colors.universal.blue}
			/>
			{showDropdown && (
				<Button
					title="Cancel"
					onPress={() => {
						setShowDropdown(false);
					}}
					color={Colors.universal.blue}
				/>
			)}
			{!showDropdown && (
				<Button
					title="Change Country"
					onPress={() => handleCountryChange()}
					color={Colors.universal.blue}
				/>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
});
export default FilterButtons;
