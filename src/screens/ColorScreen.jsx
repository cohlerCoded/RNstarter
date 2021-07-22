import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const ColorScreen = () => {
  const randomRgb = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
  }
  return (
    <View>
      <Button title='Add a Color' />
      <View style={{ height: 100, width: 100, backgroundColor: randomRgb() }} />
    </View>
  )
}

const styles = StyleSheet.create({})

export default ColorScreen
