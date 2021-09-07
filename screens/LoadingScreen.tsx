import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Text, View } from "../components/Themed";
import * as nameActions from '../store/actions/name'

const LoadingScreen = (props :any) => {
    const {setLoaded} = props
    const [isDataLoaded, setIsDataLoaded] = useState(false)
    const [errors, setErrors] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        getAsyncStorageData()
    },[])

    const getAsyncStorageData = async() => {
        try {
            const likedNamesJson = await AsyncStorage.getItem('@liked_Names')
            const dislikedNamesJson = await AsyncStorage.getItem('@disliked_Names')
            const lastInteractedIdJson = await AsyncStorage.getItem('@last_Interacted_Id')
            const previousIDStateJson = await AsyncStorage.getItem('@last_Interacted_Id')
            if(lastInteractedIdJson){ // last interacted ID state will always be true if the user liked or disliked a name
               await dispatch(nameActions.loadPreviousNameState({
                    likedNames: likedNamesJson ? JSON.parse(likedNamesJson) : [],
                    dislikedNames: dislikedNamesJson ? JSON.parse(dislikedNamesJson) : [],
                    lastInteractedId: lastInteractedIdJson ? JSON.parse(lastInteractedIdJson) : {boy:0, girl:100},
                    previousIDState: previousIDStateJson ? JSON.parse(previousIDStateJson) : {UnitedStates: {boy: 0, girl: 100}, EnglandAndWales: {boy: 200, girl: 300}}
                }))
                setIsDataLoaded(true)
            }  else {
                setIsDataLoaded(true)
            }
          } catch(e) {
            setErrors(e)
          } finally {
              if(isDataLoaded){
                setLoaded(true)
            } else {
                return JSON.stringify(errors)
            }
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