import React, { FunctionComponent, useState, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { FlatList, View } from "react-native"
import { Screen, Text } from "../../components"
import * as styles from './styles'
import { useStores, Question } from "../../models"

export const QuestionScreen: FunctionComponent = observer(function QuestionScreen() {
  const rootStore = useStores()
  const { questions } = rootStore.questionStore
  const [loading, setLoading] = useState(false)

  const fetchQuestions = async () => {
    setLoading(true)
    await rootStore.questionStore.getQuestions()
    setLoading(false)
  }

  useEffect(() => {
    fetchQuestions()
  }, [])

  const renderQuestion = ({ item }) => {
    const question: Question = item
    return (
      <View style={styles.QUESTION_WRAPPER}>
        <Text style={styles.QUESTION} text={question.question} />
        <View>
          {question.allAnswers.map((answer, index) => (
            <View style={styles.ANSWER_WRAPPER} key={index}>
              <Text style={styles.ANSWER} text={answer} />
            </View>
          ))}
        </View>
      </View>
    )
  }

  return (
    <Screen style={styles.ROOT} preset="fixed">
      <View style={styles.HEADER_CONTAINER}>
        <Text preset="header" tx="questionScreen.header" />
      </View>
      <FlatList
        style={styles.QUESTION_LIST}
        data={questions}
        renderItem={renderQuestion}
        extraData={{ extraDataForMobX: questions.length > 0 ? questions[0].question : "" }}
        keyExtractor={item => item.id}
        onRefresh={fetchQuestions}
        refreshing={loading}
      />
    </Screen>
  )
})
