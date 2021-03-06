import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'

const TextScreen = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={name}
        onChangeText={(newName) => setName(newName)}
      />
      <Text>My name is {name}</Text>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
      />
      {password.length > 0 && password.length < 6 && (
        <Text>Password must be longer than 5 characters</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
})

export default TextScreen
