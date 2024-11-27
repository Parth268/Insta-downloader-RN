import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const BottomList = () => {
  // Sample data for the bottom list
  const data = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
    { id: '5', title: 'Item 5' },
  ];

  // Render each item in the list
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.listItem}>
      <Text style={styles.listItemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Your main content */}
      <View style={styles.mainContent}>
        <Text style={styles.mainText}>Main Content Goes Here</Text>
      </View>

      {/* Bottom List */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.bottomList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Makes sure the list is at the bottom of the screen
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bottomList: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    maxHeight: 250, // Optional, limits the list height
  },
  listItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  listItemText: {
    fontSize: 18,
  },
});

export default BottomList;
