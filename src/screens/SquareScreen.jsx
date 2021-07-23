import React, { useState } from 'react'
import { View, FlatList, StyleSheet, Button, Text } from 'react-native'
import ColorCounter from '../components/ColorCounter'
const SquareScreen = () => {
  return (
    <View>
      <ColorCounter color='Red' />
      <ColorCounter color='Blue' />
      <ColorCounter color='Green' />
    </View>
  )
}

const styles = StyleSheet.create({})

export default SquareScreen
