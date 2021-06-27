import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigation from "./Navigation/TabNavigation";

export default function App() {
  return (
    <TabNavigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102E4A',
  },
});
