import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

//Components
import Header from './components/Header';
import Listitem from './components/Listitem';


export default function App() {

  const [items, setItems] = useState([
    {id: 1, text: "Milk"},
    {id: 2, text: "Eggs"},
    {id: 3, text: "Bread"},
    {id: 4, text: "Juice"},
  ])

  return (
    <View style={styles.container}>
      <Header title='Shopping List'/>
      <FlatList data={items} renderItem={({item}) => (
        <Listitem item={items} />
      )}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
