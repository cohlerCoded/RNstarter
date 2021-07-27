import React, { useState, useReducer } from 'react'
import { View, FlatList, StyleSheet, Button, Text } from 'react-native'
import ColorCounter from '../components/ColorCounter'

//using reducer

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case 'red':
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount }
    case 'blue':
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount }
    case 'green':
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount }
    default:
      return state
  }
}
const COLOR_ADJUST_NUMBER = 15

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
  const { red, green, blue } = state

  return (
    <View>
      <ColorCounter
        color='Red'
        onIncrease={() =>
          dispatch({ colorToChange: 'red', amount: COLOR_ADJUST_NUMBER })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'red', amount: -1 * COLOR_ADJUST_NUMBER })
        }
      />
      <ColorCounter
        color='Green'
        onIncrease={() =>
          dispatch({ colorToChange: 'green', amount: COLOR_ADJUST_NUMBER })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'green', amount: -1 * COLOR_ADJUST_NUMBER })
        }
      />
      <ColorCounter
        color='Blue'
        onIncrease={() =>
          dispatch({ colorToChange: 'blue', amount: COLOR_ADJUST_NUMBER })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'blue', amount: -1 * COLOR_ADJUST_NUMBER })
        }
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

// const SquareScreen = () => {
//   const [red, setRed] = useState(0)
//   const [blue, setBlue] = useState(0)
//   const [green, setGreen] = useState(0)

//   const COLOR_ADJUST_NUMBER = 15

//   const setColor = (color, change) => {
//     if (color + change > 255) return 255
//     if (color + change < 0) return 0
//     else return color + change
//   }

//   console.log('test')

//   return (
//     <View>
//       <ColorCounter
//         color='Red'
//         onIncrease={() => setRed(setColor(red, COLOR_ADJUST_NUMBER))}
//         onDecrease={() => setRed(setColor(red, -1 * COLOR_ADJUST_NUMBER))}
//       />
//       <ColorCounter
//         color='Blue'
//         onIncrease={() => setBlue(setColor(blue, COLOR_ADJUST_NUMBER))}
//         onDecrease={() => setBlue(setColor(blue, -1 * COLOR_ADJUST_NUMBER))}
//       />
//       <ColorCounter
//         color='Green'
//         onIncrease={() => setGreen(setColor(green, COLOR_ADJUST_NUMBER))}
//         onDecrease={() => setGreen(setColor(green, -1 * COLOR_ADJUST_NUMBER))}
//       />
//       <View
//         style={{
//           height: 200,
//           width: 200,
//           backgroundColor: `rgb(${red}, ${green}, ${blue})`,
//         }}
//       />
//     </View>
//   )
// }

const styles = StyleSheet.create({})

export default SquareScreen
