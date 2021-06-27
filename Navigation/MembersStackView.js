import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack"
import MembersListPage from "../Components/MembersListPage";

const MembersStackNavigator = createStackNavigator({
    MembersList: {
        screen: MembersListPage,
        navigationOptions: {
            title: 'Liste des Membres'
        }
    }
})

export default createAppContainer(MembersStackNavigator)