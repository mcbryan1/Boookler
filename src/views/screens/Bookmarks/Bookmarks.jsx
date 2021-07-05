import React, {useContext} from 'react'
import { View, Text } from 'react-native'
import styles from "./styles";
import themeContext from "../../../config/themeContext.js";


const Bookmarks = ({navigation}) => {
    const theme = useContext(themeContext);
    return (
        <View style={[styles.mainConatiner, { backgroundColor: theme.background }]}>
            <Text style={{color: theme.color}}>BookMark</Text>
        </View>
    )
}

export default Bookmarks
