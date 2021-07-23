import React from 'react'
import { useSelector } from 'react-redux'
import { Text, View } from '../components/Themed'

const LikedNames = () => {

    const likedNames = useSelector((state :any) => state.names.likedNames)
    return(
        <View>
            <Text>{JSON.stringify(likedNames)}</Text>
        </View>
    )
}

export default LikedNames