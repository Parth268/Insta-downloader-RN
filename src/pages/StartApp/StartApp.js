import React from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator, ScrollView } from "react-native";
import { imageStartApp } from "../../../assets/images";

const StartApp = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* App Header */}
      <Text style={styles.headerText}>Instagram Saver</Text>

      {/* Image */}
      <Image
        source={imageStartApp} // Replace with your image URL
        style={styles.image}
      />

      {/* Loading Indicator */}
      <ActivityIndicator size="large" color="#FF5733" style={styles.loader} />

      {/* Descriptions */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>No Login Required</Text>
        <Text style={styles.text}>Download Stories, Reels, and Status</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#F9FAFB",
  },
  headerText: {
    fontSize: 32,
    fontWeight: "600",
    color: "#333",
    marginBottom: 80,
    textAlign: "center",
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#FF5733",
  },
  loader: {
    marginVertical: 20,
  },
  textContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    color: "#555",
    marginBottom: 12,
    textAlign: "center",
    fontWeight: "500",
  },
});

export default StartApp;
