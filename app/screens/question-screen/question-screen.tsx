import React, { FunctionComponent as Component } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"
import { color, spacing } from "../../theme"

const ROOT: ViewStyle = {
  flex: 1,
  paddingHorizontal: spacing.large,
  backgroundColor: color.palette.black,
}

const HEADER_CONTAINER: ViewStyle = {
  marginTop: spacing.large,
  marginBottom: spacing.medium,
}

export const QuestionScreen: Component = observer(function QuestionScreen() {
  // const rootStore = useStores()
  
  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <View style={HEADER_CONTAINER}>
        <Text preset="header" tx="questionScreen.header" />
      </View>
    </Screen>
  )
})
