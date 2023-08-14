import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CatListScreen from './screens/CatListScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import HomeScreen from './screens/HomeScreen';
import { colors } from './themes/color';

export type BottomTabParamsList = {
  Home: undefined;
  CatList: undefined;
  Favorite: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParamsList>();

const BottomTabRoutes = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.secondary,
        tabBarShowLabel: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => <FontAwesome5 name="cat" size={size} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="CatList"
        component={CatListScreen}
        options={{
          tabBarIcon: ({ size, color }) => <FontAwesome5 name="search" size={size} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ size, color }) => <FontAwesome5 name="heart" size={size} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabRoutes;
