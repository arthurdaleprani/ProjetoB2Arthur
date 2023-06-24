import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviePage from '../pages/MoviePage'
import MovieDetailsPage from '../pages/MovieDatailsPage'
const Stack = createNativeStackNavigator();
export default function AppRoutes(){
return(
<Stack.Navigator>
    <Stack.Screen name = 'MoviePage' component= {MoviePage} options={{headerShown :false}}/>
    <Stack.Screen name = "MovieDetailsPage" component={MovieDetailsPage} options={{headerShown :false}}/>
</Stack.Navigator>

);
}