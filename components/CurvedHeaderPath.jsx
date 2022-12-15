import * as shape from 'd3-shape'
import React from 'react'
import { Dimensions, View } from 'react-native'
import Svg, { Path } from 'react-native-svg'
const { height, width } = Dimensions.get('screen')

const header = () => {
  return <title>WELCOME TO AFRICA LIVE NETWORK!!!</title>
}
const dots = [
  { x: -width / 2, y: -height / 5 },
  { x: width / 4, y: height / 4 },
  { x: (width / 4) * 2, y: 0 },
  { x: (width / 4) * 3, y: height / 4 },
  { x: width + width / 2, y: -height / 5 },
]

export default function CurvedHeaderPath() {
  const getPath = () => {
    const path = shape
      .line()
      .x((d) => d.x)
      .y((d) => d.y)
      .curve(shape.curveBasis)(dots)
    return path
  }
  const d = getPath()
  return (
    <View style={{ flex: 1 }}>
      <Svg fill={'#1482a1'}>
        <Path {...{ d }} />
      </Svg>
    </View>
  )
}
