import { Tabs } from "expo-router"
import { StyleSheet, Text, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import Colors from "../../constants/Colors"

export default function TabLayout() {
  return (
    <Tabs
      sceneContainerStyle={{ backgroundColor: Colors.background }}
      safeAreaInsets={{ right: 10, left: 10 }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={styles.tabItem}>
                <Ionicons
                  name="md-home-outline"
                  size={25}
                  color={Colors.primary}
                />
                <Text style={styles.tabText}>Home</Text>
              </View>
            ) : (
              <View>
                <Ionicons
                  name="md-home-outline"
                  size={25}
                  color={Colors.primary}
                />
              </View>
            ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          headerShown: false,

          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={styles.tabItem}>
                <Ionicons
                  name="md-heart-outline"
                  size={25}
                  color={Colors.primary}
                />
                <Text style={styles.tabText}>Saved</Text>
              </View>
            ) : (
              <View>
                <Ionicons
                  name="md-heart-outline"
                  size={25}
                  color={Colors.primary}
                />
              </View>
            ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          headerShown: false,

          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={styles.tabItem}>
                <Ionicons
                  name="md-cart-outline"
                  size={25}
                  color={Colors.primary}
                />
                <Text style={styles.tabText}>Cart</Text>
              </View>
            ) : (
              <View>
                <Ionicons
                  name="md-cart-outline"
                  size={25}
                  color={Colors.primary}
                />
              </View>
            ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          headerShown: false,

          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={styles.tabItem}>
                <Ionicons
                  name="md-person-outline"
                  size={25}
                  color={Colors.primary}
                />
                <Text style={styles.tabText}>Account</Text>
              </View>
            ) : (
              <View>
                <Ionicons
                  name="md-person-outline"
                  size={25}
                  color={Colors.primary}
                />
              </View>
            ),
        }}
      />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  tabItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.secondary,
    gap: 3,
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 6,
    flexWrap: "nowrap",
  },
  tabText: {
    color: Colors.primary,
    fontSize: 12,
  },
})
