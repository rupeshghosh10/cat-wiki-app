import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Home from './screens/Home';
import { colors } from './themes/color';

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.secondary,
          }}
        >
          <BottomTab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ size, color }) => (
                <FontAwesome5 name="cat" size={size} color={color} />
              ),
              tabBarShowLabel: false,
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </>
  );
}
