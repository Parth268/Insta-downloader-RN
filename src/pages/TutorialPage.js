import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import { CustomNavBar } from '../components';

const { width, height } = Dimensions.get('window');

const slides = [
    {
        key: 1,
        title: 'Welcome to the App',
        description: 'Discover amazing features to simplify your life.',
        image: require('../../assets/images/tutorial1.png'), // Replace with your image path
    },
    {
        key: 2,
        title: 'Secure Your Data',
        description: 'Keep your data private and secure with advanced protection.',
        image: require('../../assets/images/tutorial2.png'), // Replace with your image path
    },
    {
        key: 3,
        title: 'Get Started',
        description: 'Begin your journey with us today.',
        image: require('../../assets/images/tutorial3.png'), // Replace with your image path
    },
];

const TutorialPage = () => {
    return (
        <View style={styles.container}>
            <Swiper
                style={styles.wrapper}
                showsButtons={true}
                loop={false}
                activeDotColor="#007AFF"
            >
                {slides.map((slide) => (
                    <View key={slide.key} style={styles.slide}>
                        <Image source={slide.image} style={styles.image} />
                        <Text style={styles.title}>{slide.title}</Text>
                        <Text style={styles.description}>{slide.description}</Text>
                    </View>
                ))}
            </Swiper>
        </View>

    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    wrapper: {
        flex: 1,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: width * 0.8,
        height: height * 0.4,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
});

export default TutorialPage;
