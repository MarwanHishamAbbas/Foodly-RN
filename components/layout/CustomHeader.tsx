import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native"

import { Ionicons } from "@expo/vector-icons"
import Colors from "@/constants/Colors"
import SearchBar from "./SearchBar"

const CustomHeader = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.titleContainer}>
          <View style={styles.locationName}>
            <Text style={styles.title}>Your Location</Text>
            <Ionicons
              name="chevron-down-outline"
              size={15}
              color={Colors.primary}
            />
          </View>
          <View>
            <Text style={styles.subTitle}>Alexandria, Egypt</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.notificationBtn}>
          <Ionicons
            name="notifications-outline"
            size={30}
            color={Colors.primary}
          />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </SafeAreaView>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    height: 60,
    backgroundColor: Colors.background,
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  titleContainer: {
    flex: 1,
    gap: 3,
  },
  title: {
    fontSize: 14,
    color: Colors.medium,
  },
  subTitle: {
    fontSize: 16,
  },
  locationName: { flexDirection: "row", alignItems: "center", gap: 5 },
  notificationBtn: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: Colors.secondary,
  },
})
