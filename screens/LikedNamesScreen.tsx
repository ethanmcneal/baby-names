import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import LikedName from '../components/LikedName'
import { View } from '../components/Themed'

const LikedNamesScreen = () => {

    const likedNames = useSelector((state :any) => state.names.likedNames)
    return(
        <View style={styles.container}>
            <FlatList data={likedNames} 
            keyExtractor={(name) => name.id.toString()}
            renderItem={(nameData) => (
                <LikedName nameData={nameData} />
            )}/>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    nameRow: {
        flexDirection: 'row',
    }
})
export default LikedNamesScreen