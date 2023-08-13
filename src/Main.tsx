import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import BottomTabRoutes from './BottomTabRoutes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CatDetailsSCreen from './screens/CatDetailScreen';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="CatDetails" component={CatDetailsSCreen} />
          <Stack.Screen
            name="Main"
            component={BottomTabRoutes}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Main;
