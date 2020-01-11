
import Home from '../screen/home';
import Review from '../screen/review';
import Analyze from '../screen/analyze';
import Badreviews from '../screen/badreviews.js'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
const screens={
    Home:{
        screen: Home
    },
    Review:{
        screen: Review 
    },
    Analyze:{
        screen: Analyze
    },
    Badreviews:{
        screen: Badreviews
    }
}
const HomeStack=createStackNavigator(screens)
export default createAppContainer(HomeStack)