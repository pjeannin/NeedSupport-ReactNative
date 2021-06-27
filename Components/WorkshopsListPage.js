import React from 'react';
import {View, StyleSheet, Text, FlatList, SafeAreaView, ActivityIndicator, Image, TouchableOpacity} from "react-native";
import WorkshopSummary from "./WorkshopSummary";
import Backend from "../Backend/backend.json"

class WorkshopsListPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            workshops: [],
            error: null
        };
    }

    _displayAddNewUser() {
        this.props.navigate("AddWorkshop");
    }

    componentDidMount = async () => {
        console.log(this.props)
        const headers = {
            'Content-Type': 'application/json',
        };

        try {
            const workshops = await fetch(Backend.strapi + 'workshops', {
                method: 'GET',
                headers: headers,
            })
                .then((response) => response.json())
            this.setState({ workshops });
        } catch (error) {
            this.setState({ error });
        }
    }

    render() {
        if (this.state.error || this.state.workshops[0] === undefined)
            return (<View style={styles.loading_container}>
                <ActivityIndicator/>
            </View>);
        return(
            <View style={styles.mainContainer}>
                <FlatList
                    data={this.state.workshops}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => <WorkshopSummary workshop={item}/>}
                />
                <TouchableOpacity style={styles.button}
                onPress={() => this._displayAddNewUser()}>
                    <Image style={styles.image} source={require('../assets/plusButton.png')}/>
                </TouchableOpacity>
            </View>
        )
    }
}

export default WorkshopsListPage;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#102E4A'
    },

    loading_container: {
        flex: 1,
        backgroundColor: '#102E4A',
        alignItems: 'center',
        justifyContent: 'center'
    },

    button: {
        position: 'absolute',
        bottom: 20,
        right: 20
    },

    image: {
        width: 55,
        height: 55
    }
})