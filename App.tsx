import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
import MainNavigation from './src/navigation/MainNavigation';
import { StartApp } from './src/pages';


function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to hide StartApp after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar hidden />
      {isLoading ? <StartApp /> : <MainNavigation />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
