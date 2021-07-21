import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetail = ({ title, imageURL, imagePath }) => {
  return (
    <View>
      <Image
        source={imagePath ? imagePath : { uri: imageURL }}
        style={styles.imageStyle}
      />
      <Text>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  imageStyle: { width: '100%', height: 200, resizeMode: 'stretch' },
})
export default ImageDetail
