import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Listitem = ({ item, deleteItem }) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listView}>
        <Text style={styles.listText}>{item.text}</Text>
        <TouchableOpacity onPress={() => deleteItem(item.id)}>
          <Text style={styles.remove}>×</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

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
    fontSize: 18,
  },
  remove: {
    fontSize: 30,
    color: "firebrick",
    fontWeight: 700,
  },
});
