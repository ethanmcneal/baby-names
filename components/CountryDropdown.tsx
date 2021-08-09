import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";

const CountryDropdown = (props: any) => {
	const [selectedLanguage, setSelectedLanguage] = useState('');

	return (
		<Picker
        style={{borderWidth: 1, borderColor: 'black', width: '100%'}}  
			selectedValue={selectedLanguage}
			onValueChange={(itemValue, itemIndex) =>
				setSelectedLanguage(itemValue)
			}
		>
			<Picker.Item  label="Java" value="java" />
			<Picker.Item label="JavaScript" value="js" />
		</Picker>
	);
};

export default CountryDropdown