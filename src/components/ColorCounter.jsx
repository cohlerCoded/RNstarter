import React, { useState } from 'react'
import { View, FlatList, StyleSheet, Button, Text } from 'react-native'

const ColorCounter = ({ color }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`}></Button>
      <Button title={`Decrease ${color}`}></Button>
    </View>
  )
}

export default ColorCounter
