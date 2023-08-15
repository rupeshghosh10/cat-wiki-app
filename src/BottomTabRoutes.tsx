import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useEffect, useState } from 'react';
import { getCats } from './api';
import Loading from './components/Loading';
import CatListScreen from './screens/CatListScreen';
import ErrorScreen from './screens/ErrorScreen';
import HomeScreen from './screens/HomeScreen';
import MostSearchedBreed from './screens/MostSearchedBreed';
import { useCatStore } from './stores';
import { colors } from './themes/color';

export type BottomTabParamsList = {
  Home: undefined;
  CatList: undefined;
  MostSearched: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParamsList>();

const BottomTabRoutes = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const populateCats = useCatStore((state) => state.populateCats);

  useEffect(() => {
    async function fetchCats() {
      const response = await getCats();
      if (response.error) {
        setError(response.error);
      } else {
        populateCats(response.cats!);
      }
      setLoading(false);
    }
    if (loading) {
      fetchCats();
    }
  }, [setLoading, loading, setError]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorScreen onRetry={() => setLoading(true)} />;
  }

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
        name="MostSearched"
        component={MostSearchedBreed}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="list-ol" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabRoutes;
