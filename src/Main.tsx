import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import BottomTabRoutes from './BottomTabRoutes';
import CatDetailsScreen from './screens/CatDetailScreen';
import { colors } from './themes';

export type StackParamList = {
  Main: undefined;
  CatDetails: { id: string; name: string };
};

const Stack = createNativeStackNavigator<StackParamList>();

const Main = () => {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: colors.primary,
          }}
        >
          <Stack.Screen
            name="Main"
            component={BottomTabRoutes}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CatDetails"
            component={CatDetailsScreen}
            initialParams={{ id: '' }}
            options={({ route }) => ({ title: route.params.name })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Main;
