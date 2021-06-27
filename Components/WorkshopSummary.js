import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";

class WorkshopSummary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        };
    }

    _displayWorkshopDetails() {
        this.setState({show: !this.state.show})
    }

    render() {
        const workshop = this.props.workshop;

        if (this.state.show) {
            return (
                <TouchableOpacity style={styles.mainContainer}
                                  onPress={() => this._displayWorkshopDetails()}>
                    <Text style={styles.detailsTitle}>{workshop.title}</Text>
                    <Text style={styles.speaker}>{"Par " + workshop.speaker.firstname + " " + workshop.speaker.lastname}</Text>
                    <Text style={styles.description}>{workshop.description}</Text>
                    <Text style={styles.date}>{"Le " + workshop.date.substr(0, 10) + " à " + workshop.date.substr(11, 2) + "h" + workshop.date.substr(14, 2)}</Text>
                    <Text style={styles.duration}>{"Durée " + workshop.duration.substr(0, 2) + "h" + workshop.duration.substr(3, 2)}</Text>
                </TouchableOpacity>
            )
        }

        return(
            <TouchableOpacity style={styles.mainContainer}
            onPress={() => this._displayWorkshopDetails()}>
                <View style={styles.detailsContainer}>
                    <Text style={styles.text}>{workshop.title}</Text>
                    <Text style={styles.mainDate}>{"Le " + workshop.date.substr(0, 10) + " à " + workshop.date.substr(11, 2) + "h" + workshop.date.substr(14, 2)}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default WorkshopSummary

const styles = StyleSheet.create({
    mainContainer: {
        margin: 10,
        marginBottom: 0,
        backgroundColor: '#A682FF',
        borderRadius: 20
    },

    detailsContainer: {
        marginRight: 2,
        marginLeft: 2,
        flex: 1,
    },

    dateContainer: {
        margin: 5
    },

    descriptionContainer: {
        margin: 5
    },

    text: {
        textAlign: 'center',
        fontSize: 17,
        margin: 5
    },

    detailsTitle: {
        fontSize: 17,
        textAlign: 'center',
        marginTop: 5
    },

    speaker: {
        fontSize: 13,
        textAlign: 'center',
        fontStyle: 'italic'
    },

    description: {
        fontSize: 15,
        fontStyle: 'italic',
        margin: 10,
        textAlign: 'justify'
    },

    date: {
        fontSize: 13,
        marginLeft: 10
    },

    duration: {
        fontSize: 13,
        marginLeft: 10,
        marginBottom: 10
    },

    mainDate: {
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 5
    }
})