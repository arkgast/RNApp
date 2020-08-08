import { ViewStyle, TextStyle } from "react-native"
import { color, spacing } from "../../theme"

export const ROOT: ViewStyle = {
  flex: 1,
  paddingHorizontal: spacing.large,
  backgroundColor: color.palette.black,
}

export const HEADER_CONTAINER: ViewStyle = {
  marginTop: spacing.large,
  marginBottom: spacing.medium,
}

export const QUESTION_WRAPPER: ViewStyle = {
  borderBottomColor: color.line,
  borderBottomWidth: 1,
  paddingVertical: spacing.large,
}

export const QUESTION_LIST: ViewStyle = {
  marginBottom: spacing.large,
}

export const QUESTION: TextStyle = {
  fontWeight: "bold",
  fontSize: 16,
  marginVertical: spacing.medium,
}

export const ANSWER: TextStyle = {
  fontSize: 12,
}

export const ANSWER_WRAPPER: ViewStyle = {
  paddingVertical: spacing.small,
}

export const CHECK_ANSWER: ViewStyle = {
  backgroundColor: color.palette.angry,
  padding: spacing.medium,
  marginTop: spacing.medium,
}
