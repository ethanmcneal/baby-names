import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const FilterButtons = (props :any) => {

    const {showDropdown, setShowDropdown, handleCountryChange, saveFilters} = props
    return (
        <View style={styles.buttonContainer}>
				<Button title="Save" onPress={() => saveFilters()} />
				{showDropdown && (
					<Button
						title="Cancel"
						onPress={() => {
							setShowDropdown(false);
						}}
					/>
				)}
				{!showDropdown && (
					<Button
						title="Change Country"
						onPress={() => handleCountryChange()}
					/>
				)}
		</View>
        )
}


const styles = StyleSheet.create({
    buttonContainer: {},
})
export default FilterButtons