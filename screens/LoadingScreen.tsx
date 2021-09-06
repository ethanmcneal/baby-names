import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'

const LoadingScreen = (props :any) => {
    const {setLoading} = props
    const [isDataLoaded, setIsDataLoaded] = useState(false)

    const getAsyncStorageData = async() => {
        try {
            const jsonValue = await AsyncStorage.getItem('@storage_Key')
            return jsonValue != null ? JSON.parse(jsonValue) : null;
          } catch(e) {
            // error reading value
          }
    }
}