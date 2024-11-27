import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomNavBar = ({ title, onBackPress, showBackButton }) => {
    return (
        <View style={styles.navBar}>
            {showBackButton && (
                <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
                    <Text style={styles.backText}>{'< Back'}</Text>
                </TouchableOpacity>
            )}
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    navBar: {
        height: 60,
        backgroundColor: '#FFE4E1', // Very light pink color
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    backButton: {
        marginRight: 15,
    },
    backText: {
        color: '#000', // Changed to black for better contrast with light background
        fontSize: 16,
    },
    title: {
        fontSize: 18,
        color: '#000', // Changed to black for better contrast with light background
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
});

export default CustomNavBar;
