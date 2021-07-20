import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
  const friends = [
    { name: 'Alice', age: 38, sex: 'F' },
    { name: 'Sammy', age: 37, sex: 'M' },
    { name: 'Steve', age: 40, sex: 'M' },
    { name: 'Grace', age: 26, sex: 'F' },
    { name: 'Maria', age: 42, sex: 'F' },
    { name: 'Eace', age: 37, sex: 'M' },
    { name: 'Danny', age: 36, sex: 'M' },
    { name: 'Alex', age: 37, sex: 'M' },
    { name: 'Krystle', age: 37, sex: 'F' },
    { name: 'Taylor', age: 37, sex: 'F' },
  ]
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginHorizontal: 50,
    marginVertical: 50,
  },
})

export default ListScreen
