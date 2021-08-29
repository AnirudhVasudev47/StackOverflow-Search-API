import createStackNavigator from "react-native-screens/createNativeStackNavigator";
import {createAppContainer} from 'react-navigation';
import HomeScreen from "../home_screen";
import ResultsPage from "../results/results_page";

const screens = {
  Search: {
    screen: HomeScreen
  },
  Result: {
    screen: ResultsPage
  },
}

const SearchRoute = createStackNavigator(screens);

export default createAppContainer(SearchRoute)