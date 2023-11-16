import Categories from "@/components/home/Categories"
import Restaurants from "@/components/home/Restaurants"
import Colors from "@/constants/Colors"
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function TabOneScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground
          resizeMode="cover"
          source={require("@/assets/images/banner.jpg")}
          style={styles.bannerContainer}
        >
          <View style={styles.insideContainer}>
            <Text style={styles.insideText}>Breakfast</Text>
            <Text style={styles.insideText}>Best Deals</Text>
            <Text style={styles.insideBadge}>upto 40% off</Text>
          </View>
        </ImageBackground>
        <Categories />
        <Restaurants />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  bannerContainer: {
    marginHorizontal: 20,
    height: 150,
    borderRadius: 15,
    overflow: "hidden",
  },
  insideContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  insideText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  insideBadge: {
    width: "40%",
    textAlign: "center",
    padding: 10,
    backgroundColor: Colors.primary,
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
    overflow: "hidden",
    borderRadius: 10,
    marginTop: 10,
  },
})
