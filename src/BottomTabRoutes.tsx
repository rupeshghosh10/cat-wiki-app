import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import { colors } from './themes/color';

const BottomTab = createBottomTabNavigator();

const BottomTabRoutes = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.secondary,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => <FontAwesome5 name="cat" size={size} color={color} />,
          tabBarShowLabel: false,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabRoutes;
