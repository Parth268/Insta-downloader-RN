import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';  // Importing MaterialIcons

const MainApp = () => {
    // Handle button press
    const handlePress = (page) => {
        console.log(`Navigating to ${page}`);
    };

    return (
        <SafeAreaView style={styles.container}>

            {/* Main Content */}
            <View style={styles.content}>
                <Text style={styles.contentText}>Welcome to the MainApp!</Text>
                <Text style={styles.descriptionText}>This is the main screen of the app.</Text>
            </View>

            {/* Footer / Bottom Navigation */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButton} onPress={() => handlePress('Home')}>
                    <Icon name="home" size={24} color="#6200EE" /> 
                    <Text style={styles.footerButtonText}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButton} onPress={() => handlePress('Profile')}>
                    <Icon name="person" size={24} color="#6200EE" />  
                    <Text style={styles.footerButtonText}>Profile</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        height: 80,
        backgroundColor: '#6200EE',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#ddd',
    },
    headerText: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    contentText: {
        fontSize: 28,
        color: '#333',
        fontWeight: '600',
    },
    descriptionText: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginTop: 10,
    },
    footer: {
        height: 60,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    footerButton: {
        paddingVertical: 10,
        alignItems: 'center',  // Aligns text and icon vertically
    },
    footerButtonText: {
        fontSize: 16,
        color: '#6200EE',
    },
});

export default MainApp;
