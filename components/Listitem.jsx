import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-vector-icons/dist/fontAwesome';

const Listitem = ({item}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
        <View style={styles.listView}>
            <Text style={styles.listText}>{item.text}</Text>
            <Icon name='remove' size={20} color="firebrick" />
        </View>
    </TouchableOpacity>
  )
}

export default Listitem;

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: "#f8f8f8",
        borderBottomWidth: 1,
        borderColor: "#eee",
    },
    listView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    listText: {
        fontSize: 18
    }
})
