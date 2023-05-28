import React, { FC } from 'react'
import { View, Text } from 'react-native';

interface MealItemProps {
    title: string
}

const MealItem:FC<MealItemProps> = ({title}) => {
  return (
    <View>
        <Text>{title}</Text>
    </View>
  )
}

export default MealItem