import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native"
import React from "react"
import { categories } from "@/assets/data/home"

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        padding: 10,
      }}
    >
      {categories.map((category, idx) => (
        <TouchableOpacity
          style={{ ...styles.categoryCard, backgroundColor: category.bg }}
          key={idx}
        >
          <Image
            source={category.img}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.categoryText}>{category.text}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

export default Categories

const styles = StyleSheet.create({
  categoryCard: {
    overflow: "hidden",
    padding: 10,
    width: 120,
    height: 120,
    marginHorizontal: 5,
    backgroundColor: "#fff",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    borderRadius: 20,
  },
  categoryText: {
    padding: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  image: {
    position: "absolute",
    bottom: -20,
    right: -30,
    width: 120,
    height: 120,
  },
})
