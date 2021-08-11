import * as React from "react";
import { Appearance, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
import Filters from "../components/Filters";
import CustomHeaderButton from "../components/HeaderButtonComponent";
import NameCard from "../components/NameCard";
import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
const colorScheme = Appearance.getColorScheme();

export default function Home(props: any) {
	const [showFilters, setShowFilter] = React.useState(false);

	const filterButtonHandler = React.useCallback(() => {
		setShowFilter(!showFilters);
	}, [setShowFilter, showFilters]);
	const nextID = useSelector((state: any) => state.names.lastInteractedId);
	const [gender, setGender] = React.useState("boy");
	const [index, setIndex] = React.useState(nextID[gender] + 1);

	React.useEffect(() => {
		props.navigation.setParams({ filtersButton: filterButtonHandler });
	}, [filterButtonHandler]);
	return (
		<View style={styles.screen}>
			<View style={styles.container}>
				{showFilters && (
					<Filters
            gender={gender}
						setIndex={setIndex}
						nextID={nextID}
						setShowFilter={setShowFilter}
					/>
				)}
				<NameCard
					showFilters={showFilters}
					nextID={nextID}
					index={index}
					setIndex={setIndex}
					gender={gender}
					setGender={setGender}
				/>
			</View>
		</View>
	);
}

Home.navigationOptions = (navData: any) => {
	return {
		headerTitle: "Home",
		headerRight: () => {
			return (
				<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
					<Item
						title="Menu"
						iconName={"ios-settings"}
						onPress={() => {
							navData.navigation.getParam("filtersButton")();
						}}
					/>
				</HeaderButtons>
			);
		},
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		width: "100%",
		backgroundColor:
			colorScheme === "dark"
				? Colors.dark.background
				: Colors.light.background,
	},
	container: {
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 10,
		height: 1,
		width: "80%",
		backgroundColor: "#222",
	},
});
