import { View, Text, Image, useWindowDimensions, StyleSheet } from 'react-native'
import React from 'react'

const cover = require("../../../assets/images/tenda.jpg")

const dimensions = {
    with: 900,
    height: 450,
  }

const ratio = dimensions.height / dimensions.with

function CustomHeaderLoja() {
    const window = useWindowDimensions()

    const width = window.width
    const height = width * ratio

  return (
    <>
      <Image style={{ width, height }} source={cover} />
      <View style={styles.container}>
        <Text style={styles.title}>Tenda do Monte Olimpo</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#6F4E37",
      paddingVertical: 8,
      marginBottom: 16,
    },
  
    title: {
      alignSelf: "center",
      fontSize: 36,
      fontWeight: "bold",
      color: "#FFF",
    },
  })

export default CustomHeaderLoja