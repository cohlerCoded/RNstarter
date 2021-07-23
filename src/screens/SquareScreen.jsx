import React, { useState } from 'react'
import { View, FlatList, StyleSheet, Button, Text } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const SquareScreen = () => {
  const [red, setRed] = useState(0)
  const [blue, setBlue] = useState(0)
  const [green, setGreen] = useState(0)

  const COLOR_ADJUST_NUMBER = 15

  return (
    <View>
      <ColorCounter
        color='Red'
        onIncrease={() => setRed(red + COLOR_ADJUST_NUMBER)}
        onDecrease={() => setRed(red - COLOR_ADJUST_NUMBER)}
      />
      <ColorCounter
        color='Blue'
        onIncrease={() => setBlue(blue + COLOR_ADJUST_NUMBER)}
        onDecrease={() => setBlue(blue - COLOR_ADJUST_NUMBER)}
      />
      <ColorCounter
        color='Green'
        onIncrease={() => setGreen(green + COLOR_ADJUST_NUMBER)}
        onDecrease={() => setGreen(green - COLOR_ADJUST_NUMBER)}
      />
      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default SquareScreen
