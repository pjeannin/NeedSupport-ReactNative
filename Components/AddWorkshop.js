import React, {useRef, useState} from "react";
import {Text, View, StyleSheet, TextInput, Button} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

class AddWorkshop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: Date.now(),
            duration: new Date(0),
            title: "",
            description: ""
        }
    }

    _setDate(date) {
        this.setState({date: date})
    }

    _onChange(event, selectedDate){
        const currentDate = selectedDate || this.state.date;
        this._setDate(currentDate);
    }

    _setDuration(date) {
        this.setState({duration: date})
    }

    _onChangeDuration(event, selectedDate){
        const currentDate = selectedDate || this.state.duration;
        this._setDuration(currentDate);
    };

    _addWorkshop() {
        console.log("new Workshop")
    }

    render() {
        return(
            <View style={styles.mainContainer}>
                <Text style={styles.title}>Titre</Text>
                <View style={styles.textFieldView}>
                    <TextInput
                        style={styles.textField}
                        multiline={false}
                        clearButtonMode="while-editing"
                        enablesReturnKeyAutomatically={true}
                        keyboardAppearance="dark"
                        maxLength={50}
                        placeholder="Titre"
                        returnKeyType="next"
                        blurOnSubmit={false}
                    />
                </View>
                <Text style={styles.title}>Description</Text>
                <View style={styles.textFieldView}>
                    <TextInput
                        style={styles.textField}
                        multiline={false}
                        clearButtonMode="while-editing"
                        enablesReturnKeyAutomatically={true}
                        keyboardAppearance="dark"
                        maxLength={50}
                        placeholder="Description"
                        returnKeyType="next"
                    />
                </View>
                <View style={{flexDirection: 'row', margin: 10}}>
                    <View style={{flex: 1}}/>
                    <Text style={styles.titleDate}>Le</Text>
                    <View style={styles.dateTimePicker}>
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={this.state.date}
                            themeVariant="dark"
                            mode={'date'}
                            is24Hour={true}
                            display="default"
                            onChange={(event, selectedDate) => {this._onChange(event, selectedDate)}}
                        />
                    </View>
                    <Text style={styles.titleDate}>À</Text>
                    <View style={styles.timePicker}>
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={this.state.date}
                            themeVariant="dark"
                            mode={'time'}
                            is24Hour={true}
                            display="default"
                            onChange={(event, selectedDate) => {this._onChange(event, selectedDate)}}
                        />
                    </View>
                    <View style={{flex: 1}}/>
                </View>
                <View style={{flexDirection: 'row', margin: 10}}>
                    <View style={{flex: 1}}/>
                    <Text style={styles.titleDate}>Durée</Text>
                    <View style={styles.timePicker}>
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={this.state.duration}
                            themeVariant="dark"
                            mode={'time'}
                            is24Hour={true}
                            display="default"
                            onChange={(event, selectedDate) => {this._onChangeDuration(event, selectedDate)}}
                        />
                    </View>
                    <View style={{flex: 1}}/>
                </View>
                <View style={styles.addButton}>
                    <Button
                        title="ajouter"
                        onPress={() => this._addWorkshop()}
                    />
                </View>
            </View>
        )
    }
}

export default AddWorkshop;

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#5887FF',
        flex: 1
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5
    },

    titleDate: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 12
    },

    textFieldView: {
        backgroundColor: 'white',
        borderRadius: 20,
        margin: 5,
        marginBottom: 0
    },

    textField: {
        fontSize: 15,
        textAlign: 'center',
        margin: 5
    },

    dateTimePicker: {
        backgroundColor: 'white',
        textAlign: 'center',
        margin: 5,
        borderRadius: 20,
        width: 100
    },

    timePicker: {
        backgroundColor: 'white',
        textAlign: 'center',
        margin: 5,
        borderRadius: 20,
        width: 70
    },

    addButton: {
        backgroundColor: 'white',
        borderRadius: 20,
        margin: 5
    }
})