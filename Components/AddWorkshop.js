import React, {useRef, useState} from "react";
import {Text, View, StyleSheet, TextInput, Button} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

class AddWorkshop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: Date.now()
        }
    }

    _setDate(date) {
        this.setState({date: date})
    }

    _onChange(event, selectedDate){
        const currentDate = selectedDate || this.state.date;
        this._setDate(currentDate);
    };

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
                <Text style={styles.title}>Date</Text>
                <View style={{textAlign: 'center'}}>
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
                <Text style={styles.title}>Heure</Text>
                <View style={{textAlign: 'center'}}>
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
                <Text style={styles.title}>Durée</Text>
                <View style={{textAlign: 'center'}}>
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
                <Button title="ajouter"/>
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
        textAlign: 'center'
    }
})