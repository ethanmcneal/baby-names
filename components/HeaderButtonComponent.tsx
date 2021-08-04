import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButton } from "react-navigation-header-buttons";
import { Appearance } from "react-native";
import Colors from "../constants/Colors";

const CustomHeaderButton = (props: any) => {

    const colorScheme = Appearance.getColorScheme()

	return (
		<HeaderButton
			{...props}
			IconComponent={Ionicons}
			iconSize={22}
			color={colorScheme === "dark" ? Colors.dark.tabIconDefault : Colors.light.tabIconDefault}
		/>
	);
};

export default CustomHeaderButton;