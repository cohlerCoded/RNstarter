import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
const CounterScreen = () => {
  const [count, setCount] = useState(0)
  const increase = () => setCount(count + 1)
  const decrease = () => setCount(count - 1)
  return (
    <View>
      <Button onPress={increase} title='Increase' />
      <Button onPress={decrease} title='Decrease' />
      <Text>Current Count</Text>
      <Text>{count}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default CounterScreen