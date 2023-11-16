import Colors from "@/constants/Colors"

export const categories = [
  {
    text: "Burgers",
    img: require("@/assets/images/burger.png"),
    bg: Colors.secondary,
  },
  {
    text: "Pizzas",
    img: require("@/assets/images/pizza.png"),
    bg: Colors.yellow,
  },
  {
    text: "Cakes",
    img: require("@/assets/images/cake.png"),
    bg: Colors.blue,
  },
  {
    text: "Tacos",
    img: require("@/assets/images/tako.png"),
    bg: Colors.green,
  },
]

export const restaurants = [
  {
    name: "Vapiano",
    rating: "4.5 Excellent",
    ratings: "(500+)",
    distance: "0.7 miles away",
    img: require("@/assets/data/r1.jpeg"),
    tags: ["Italian", "Pizza", "Pasta", "Salads"],
    duration: "35 - 45",
  },
  {
    name: "✨Urban Greens✨",
    id: "2",
    rating: "4.9 Excellent",
    ratings: "(500+)",
    distance: "1.7 miles away",
    img: require("@/assets/data/r2.jpeg"),
    tags: ["Salads", "Vegan", "Healthy", "British"],
    duration: "15 - 30",
  },
  {
    name: "El Minero",
    id: "3",
    rating: "4.5 Excellent",
    ratings: "(500+)",
    distance: "3 miles away",
    img: require("@/assets/data/r3.jpeg"),
    tags: ["Spanish", "Salads", "Tpas", "Pasta"],
    duration: "25 - 45",
  },
]
