import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { Text, View } from "../components/Themed";

const LoadingScreen = (props :any) => {
    const {setLoading} = props
    const [isDataLoaded, setIsDataLoaded] = useState(false)

    const getAsyncStorageData = async() => {
        try {
            const jsonValue = await AsyncStorage.getItem('@storage_Key')
            return jsonValue != null ? JSON.parse(jsonValue) : null;
          } catch(e) {
            console.log(e)
          }
    }

    return (
        <View>
            <Text>
                Loading...
            </Text>
        </View>
    )
}
export default LoadingScreen