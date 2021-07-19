import React, { useState } from "react";
import { Button } from "react-native";
import { Name } from "../types";
import { Text, View } from "./Themed";


const NameCard = (props :any) => {
    const {names} = props
    const [counter, setCounter] = useState(0)

    return(
        <View>
            <Text>{JSON.stringify(names[counter])}</Text>
            <Button title='next' onPress={() => setCounter(prev => prev +1)}/>
        </View>
    )
}

export default NameCard