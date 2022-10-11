import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import TicketsScreen from '../screens/TicketsScreen';
import PlacesScreen from '../screens/PlacesScreen';
//#b4824b
//#1e232d
export type TabStackParamList = {
    Tickets: undefined;
    Events: undefined;
    Places: undefined;
    Profile: undefined;
}

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false,
    });
  }, []);
  
  return (
    <Tab.Navigator 
    screenOptions={({ route }) => ({
        tabBarStyle: {backgroundColor: "#242c38"},
        tabBarActiveTintColor: "#b4824b" ,
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ focused, color, size }) => {
            if ( route.name === 'Tickets') {
                return (
                    <Icon
                        name="ticket-confirmation"
                        type="material-community"
                        color={focused ? "#b4824b" : "gray"}
                    />
                )
            } else if (route.name === "Events") {
                return (
                    <Icon
                        name="event-available"
                        type="material"
                        color={focused ? "#b4824b" : "gray"}
                    />
                )
            } else if (route.name === "Places") {
                return (
                    <Icon
                        name="university"
                        type="font-awesome-5"
                        color={focused ? "#b4824b" : "gray"}
                    />
                )
            } else if (route.name === "Notifications") {
                return (
                    <Icon
                        name="notifications"
                        type="ionicons"
                        color={focused ? "#b4824b" : "gray"}
                    />
                )
            } else if (route.name === "Profile") {
                return (
                    <Icon
                        name="user-alt"
                        type="font-awesome-5"
                        color={focused ? "#b4824b" : "gray"}
                    />
                )
            }
        }
    })}>
        <Tab.Screen name="Tickets" component={TicketsScreen} />
        <Tab.Screen name="Events" component={TicketsScreen} />
        <Tab.Screen name="Places" component={PlacesScreen} />
        <Tab.Screen name="Notifications" component={TicketsScreen} />
        <Tab.Screen name="Profile" component={TicketsScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigator