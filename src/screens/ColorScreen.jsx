import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const ColorScreen = () => {
  const [colors, setColors] = useState([])

  console.log(colors)

  const randomRgb = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
  }

  return (
    <View>
      <Button
        title='Add a Color'
        onPress={() => setColors([...colors, randomRgb()])}
      />
      {colors.map((color) => (
        <View style={{ height: 100, width: 100, backgroundColor: color }} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({})

export default ColorScreen
