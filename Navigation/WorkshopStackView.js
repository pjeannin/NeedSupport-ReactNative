import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack"
import WorkshopsListPage from "../Components/WorkshopsListPage";
import AddWorkshop from "../Components/AddWorkshop";

const WorkshopsStackNavigator = createStackNavigator({
    WorkshopList: {
        screen: WorkshopsListPage,
        navigationOptions: {
            title: 'Liste des Ateliers'
        }
    },

    AddWorkshop: {
        screen: AddWorkshop,
        navigationOptions: {
            title: 'Ajouer un atelier'
        }
    }
})

export default createAppContainer(WorkshopsStackNavigator)