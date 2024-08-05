/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-unused-styles */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable global-require */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import { Image, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Login from './pages/Login/Login';
import ParkSchedule from './pages/ParkSchedule/ParkSchedule';
import PlanScreen from './pages/PlanScreen/PlanScreen';
import ProfileScreen from './pages/ProfileScreen/ProfileScreen';
import SearchScreen from './pages/SearchScreen/SearchScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function LogoHeader() {
  return (
    <View style={styles.logoDiv}>
      <Image source={require('./assets/logo.jpg')} style={styles.logo} />
    </View>
  );
}

function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ParkSchedule"
        component={ParkSchedule}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function MainTabs() {
  return (
    <>
      <LogoHeader />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'SearchTab') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'MyPlansTab') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'ProfileTab') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return (
              <Icon
                name={iconName || 'list-outline'}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: '#008CBA',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="SearchTab"
          component={SearchStack}
          options={{ title: 'Search' }}
        />
        <Tab.Screen
          name="MyPlansTab"
          component={PlanScreen}
          options={{ title: 'My Plans' }}
        />
        <Tab.Screen
          name="ProfileTab"
          component={ProfileScreen}
          options={{ title: 'Profile' }}
        />
      </Tab.Navigator>
    </>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    flex: 1,
  },
  logo: {
    height: 75,
    resizeMode: 'contain',
    width: 150,
  },
  logoDiv: {
    alignItems: 'center',
    backgroundColor: '#cfcec9',
    padding: 10,
    paddingTop: Constants.statusBarHeight,
    width: '100%',
  },
});
