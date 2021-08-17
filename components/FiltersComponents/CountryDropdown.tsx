import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import Colors from "../../constants/Colors";

const CountryDropdown = (props: any) => {

    const {country, setCountry} = props;
    const textColor = props.colorScheme === 'dark' ? Colors.dark.text : Colors.light.text
	return (
		<Picker
        style={{borderWidth: 1, borderColor: 'black', width: '100%'}}  
			selectedValue={country}
			onValueChange={(itemValue, itemIndex) =>
				setCountry(itemValue)
			}
		>
			<Picker.Item color={textColor} label="United States" value="UnitedStates" />
			<Picker.Item color={textColor} label="England and Wales" value="EnglandAndWales" />
		</Picker>
	);
};

export default CountryDropdown