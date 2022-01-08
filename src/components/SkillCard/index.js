import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export const SkillCard = ({ skill }) => {
  return (
    <TouchableOpacity style={styles.contentListText}>
      <Text style={styles.listText}>{skill}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contentListText: {
    backgroundColor: "#1f1e25",
    padding: 20,
    marginVertical: 5,
    borderRadius: 7,
  },
  listText: {
    color: "#fff",
    alignSelf: "center",
  },
});
