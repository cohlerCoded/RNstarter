import React, { useState } from 'react'
import { View, FlatList, StyleSheet, Button, Text } from 'react-native'

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={onIncrease} title={`Increase ${color}`}></Button>
      <Button onPress={onDecrease} title={`Decrease ${color}`}></Button>
    </View>
  )
}

export default ColorCounter
