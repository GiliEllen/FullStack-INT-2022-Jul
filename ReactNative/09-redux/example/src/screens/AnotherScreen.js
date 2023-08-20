import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';


const AnotherScreen = () => {

  const count = useSelector((store) => store.count.count);

  return (
    <View style={styles.mt}>
      <Text>AnotherScreen: {count}</Text>
    </View>
  )
}

export default AnotherScreen

const styles = StyleSheet.create({
    mt: {
        marginTop: 50
    }
})