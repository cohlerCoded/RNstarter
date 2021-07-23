import React, { useState } from 'react'
import { View, FlatList, StyleSheet, Button } from 'react-native'

const ColorScreen = () => {
  const [colors, setColors] = useState([])
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
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default ColorScreen
