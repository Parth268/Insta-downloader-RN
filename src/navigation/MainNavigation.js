import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CustomNavBar } from '../components';
import { MainApp, TutorialPage } from '../pages';

const Stack = createStackNavigator();

const CustomHeader = ({ navigation, route, options, back }) => {
    return (
        <CustomNavBar
            title={options.headerTitle || route.name}
            onBackPress={() => navigation.goBack()}
            showBackButton={!!back}
        />
    );
};

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    header: (props) => <CustomHeader {...props} />, // Use custom header
                }}
            >
                <Stack.Screen name="MainApp" component={MainApp} options={{
                    headerShown: false,  // This removes the header
                }} />
                <Stack.Screen name="Tutorial" component={TutorialPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MainNavigation;
