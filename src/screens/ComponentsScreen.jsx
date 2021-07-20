import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
  const name = 'Jeff'
  const header = 'Getting started with react native!'
  const greeting = (
    <Text style={styles.greetingTextStyle}>My name is {name}</Text>
  )
  return (
    <View>
      <Text style={styles.headerTextStyle}>{header}</Text>
      {greeting}
    </View>
  )
}

const styles = StyleSheet.create({
  headerTextStyle: {
    fontSize: 45,
  },
  greetingTextStyle: {
    fontSize: 20,
  },
})

export default ComponentsScreen
