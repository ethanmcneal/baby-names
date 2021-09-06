import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

const useStoreData = (storageKey: string, value: any) => {
	useEffect(() => {
		async () => {
			try {
				const jsonValue = JSON.stringify(value);
				await AsyncStorage.setItem(storageKey, jsonValue);
			} catch (e) {
				console.log(e)
			}
		};
	}, []);
};

export default useStoreData