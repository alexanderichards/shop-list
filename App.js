import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList, Alert} from 'react-native';
import ListItem from './components/ListItem';
import Header from './components/Header';
import AddItem from './components/AddItem';

const App = () => {
  // The state is called items, and the function to manipulate the items is called setItems
  const [items, setItems] = useState([
    {id: Math.random() * Math.random(), text: 'Milk'},
    {id: Math.random() * Math.random(), text: 'Eggs'},
    {id: Math.random() * Math.random(), text: 'Bread'},
    {id: Math.random() * Math.random(), text: 'Juice'},
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  const addItem = (text) => {
    if(!text){
      Alert.alert('Error', 'Please enter an item');
    } else {
      setItems(prevItems => {
        return [{id: Math.random(), text}, ...prevItems]
      });
    }
    
  };

  return (
    <View style={styles.container}>
      <Header title='Shopping List'></Header>
      <AddItem addItem={addItem}></AddItem>
      <FlatList data={items} renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}></ListItem>}></FlatList>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  }
});

export default App;