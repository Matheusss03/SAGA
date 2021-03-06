import { View, Text, Image, StyleSheet } from "react-native"
import React from 'react'
import { Loja } from '../../../data/store'

function StoreItem({ name, image, price, description }: Loja) {

  return (
      <View style={styles.container}>
        <Image style={{ resizeMode: "contain", width: 80, height: 60 }} source={image} />
        <View style={styles.content}>
          <Text style={styles.title}>{name}</Text>
          <Text numberOfLines={5} style={styles.description}>
            <Image style={{ width: 20, height: 20, borderRadius: 10 }} source={require("../../../assets/store/moeda.png")}/>
              {price}
          </Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 16,
      paddingVertical: 20,
    },
  
    content: {
      flex: 1,
      marginLeft: 16,
    },
  
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#6F4E37",
      marginBottom: 16,
    },

    description: {
      fontSize: 16,
      color: "#000",
    },
  });

export default StoreItem