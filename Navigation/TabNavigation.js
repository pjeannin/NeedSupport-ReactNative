import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {View} from "react-native";
import MembersStackNavigator from "./MembersStackView";
import WorkshopsListPage from "../Components/WorkshopsListPage";
import AddWorkshop from "../Components/AddWorkshop";

function NewWorkshop() {
    return(
        <View style={{flex: 1}}>
            <AddWorkshop/>
        </View>
    )
}

function WorkshopList({navigation}) {
    return (
        <View style={{flex: 1}}>
            <WorkshopsListPage {...navigation}/>
        </View>
    );
}

const FirstStack = createStackNavigator();

function FirstStackScreen() {
    return(
        <FirstStack.Navigator>
            <FirstStack.Screen name="WorkshopList" component={WorkshopList}/>
            <FirstStack.Screen name="AddWorkshop" component={NewWorkshop}/>
        </FirstStack.Navigator>
    );
}

function MembersScreen() {
    return (
        <View style={{flex: 1}}>
            <MembersStackNavigator/>
        </View>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator initialRouteName="Ateliers">
            <Tab.Screen name="Ateliers" component={FirstStackScreen} />
            <Tab.Screen name="Membres" component={MembersScreen} />
        </Tab.Navigator>
    );
}

class TabNavigation extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <MyTabs/>
            </NavigationContainer>
        );
    }
}

export default TabNavigation;