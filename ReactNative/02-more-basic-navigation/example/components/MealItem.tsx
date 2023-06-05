import React, { FC } from "react";
import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native";

interface MealItemProps {
  title: string;
  imageUrl: string;
  item: any;
}

const MealItem: FC<MealItemProps> = ({ title, imageUrl, item }) => {
  const { duration, complexity, affordability } = item;
  return (
    <View style={styles.mealItem}>
      <Pressable style={({pressed}) =>  pressed ? styles.buttonPressed : null} android_ripple={{color: '#ccc'}}>
        <View>
        <View>
          <Image style={styles.Image} source={{ uri: imageUrl }} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailesItem}>{duration}m</Text>
          <Text style={styles.detailesItem}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailesItem}>{affordability.toUpperCase()}</Text>
        </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? 'hidden' : 'visible'
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden"
  },
  Image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },
  detailesItem: {
    marginHorizontal: 4,
    fontSize: 12
  },
  buttonPressed: {
    opacity: 0.5
  },
});
