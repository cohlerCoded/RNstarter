import React, { useState, useReducer } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { ...state, count: state.count + action.payload }
    case 'DECREASE_COUNT':
      return { ...state, count: state.count - action.payload }
    default:
      return state
  }
}

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  const { count } = state

  const increaseHandler = () => {
    dispatch({ type: 'INCREASE_COUNT', payload: 1 })
  }
  const decreaseHandler = () => {
    dispatch({ type: 'DECREASE_COUNT', payload: 1 })
  }

  return (
    <View>
      <Button onPress={increaseHandler} title='Increase' />
      <Button onPress={decreaseHandler} title='Decrease' />
      <Text>Current Count</Text>
      <Text>{count}</Text>
    </View>
  )
}

// const CounterScreen = () => {
//   const [count, setCount] = useState(0)
//   const increase = () => setCount(count + 1)
//   const decrease = () => setCount(count - 1)
//   return (
//     <View>
//       <Button onPress={increase} title='Increase' />
//       <Button onPress={decrease} title='Decrease' />
//       <Text>Current Count</Text>
//       <Text>{count}</Text>
//     </View>
//   )
// }

const styles = StyleSheet.create({})

export default CounterScreen
