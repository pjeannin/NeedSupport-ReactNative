import React from 'react';
import {View, StyleSheet, Text} from "react-native";

class MembersListPage extends React.Component {
    render() {
        return(
            <View style={styles.mainContainer}>
                <Text>Members List</Text>
            </View>
        )
    }
}

export default MembersListPage;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#102E4A'
    }
})