import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CenterView from "../components/myComponents/CenterView";
import { Text, View } from "../components/Themed";
import * as nameActions from "../store/actions/name";
import {
	DISLIKED_NAMES_KEY,
	LAST_INTERACTED_ID_KEY,
	LIKED_NAMES_KEY,
	PREVIOUS_ID_STATE_KEY,
} from "../constants/StorageKeys";

const LoadingScreen = (props: any) => {
	const { setLoaded } = props;
	const [isDataLoaded, setIsDataLoaded] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		getAsyncStorageData();
	}, []);

	const getAsyncStorageData = async () => {
		try {
			const likedNamesJson = await AsyncStorage.getItem(LIKED_NAMES_KEY);
			const dislikedNamesJson = await AsyncStorage.getItem(
				DISLIKED_NAMES_KEY,
			);
			const lastInteractedIdJson = await AsyncStorage.getItem(
				LAST_INTERACTED_ID_KEY,
			);
			const previousIDStateJson = await AsyncStorage.getItem(
				PREVIOUS_ID_STATE_KEY,
			); //async storage as a 'multiget' function, but since some of these may be null
              // I like this way better, and the dispatch is more readable as to what value is being passed
			if (lastInteractedIdJson) {
				// last interacted ID state will always be true if the user liked or disliked a name
				await dispatch(
					nameActions.loadPreviousNameState({
						likedNames: likedNamesJson
							? JSON.parse(likedNamesJson)
							: [],
						dislikedNames: dislikedNamesJson
							? JSON.parse(dislikedNamesJson)
							: [],
						lastInteractedId: lastInteractedIdJson
							? JSON.parse(lastInteractedIdJson)
							: { boy: 20, girl: 100 },
						previousIDState: previousIDStateJson
							? JSON.parse(previousIDStateJson)
							: {
									UnitedStates: { boy: 0, girl: 100 },
									EnglandAndWales: { boy: 200, girl: 300 },
							  },
					}),
				);
				setIsDataLoaded(true);
			} else {
				setIsDataLoaded(true);
			}
		} catch (e) {
			return JSON.stringify(e);
		}
        
	};

    if(isDataLoaded){
        setLoaded(true)
    }

	return (
		<CenterView>
			<Text>Loading...</Text>
		</CenterView>
	);
};
export default LoadingScreen;
