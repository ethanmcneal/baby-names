import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";

const CountryDropdown = (props: any) => {

    const {country, setCountry} = props;

	return (
		<Picker
        style={{borderWidth: 1, borderColor: 'black', width: '100%'}}  
			selectedValue={country}
			onValueChange={(itemValue, itemIndex) =>
				setCountry(itemValue)
			}
		>
			<Picker.Item  label="United State" value="UnitedStates" />
			<Picker.Item label="England and Wales" value="EnglandAndWales" />
		</Picker>
	);
};

export default CountryDropdown