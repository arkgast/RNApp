import React, { FunctionComponent as Component } from "react"
import { observer } from "mobx-react-lite"
import { View } from "react-native"
import { Screen, Text } from "../../components"
import * as styles from './styles'
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"


export const QuestionScreen: Component = observer(function QuestionScreen() {
  // const rootStore = useStores()
  
  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={styles.ROOT} preset="scroll">
      <View style={styles.HEADER_CONTAINER}>
        <Text preset="header" tx="questionScreen.header" />
      </View>
    </Screen>
  )
})
