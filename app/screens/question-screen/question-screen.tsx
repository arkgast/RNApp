import React, { FunctionComponent, useState, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { FlatList, View, TextStyle, TouchableOpacity, Alert } from "react-native"
import { RadioButtons } from 'react-native-radio-buttons'
import { Button, Screen, Text } from "../../components"
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

  const onPressAnser = (question: Question, guess: string) => {
    question.setGuess(guess)
  }

  const checkAnswer = (question: Question) => {
    if (question.isCorrect) {
      Alert.alert("Congrats!", "That is correct")
    } else {
      Alert.alert("Wrong!", `The correct answer is: ${question.correctAnswer}`)
    }
  }

  const renderAnswer = (answer: string, selected: boolean, onSelect: () => void, index) => {
    const style: TextStyle = selected ? { fontWeight: "bold", fontSize: 14 } : {}
    return (
      <TouchableOpacity key={index} onPress={onSelect} style={styles.ANSWER_WRAPPER}>
        <Text style={{ ...styles.ANSWER, ...style }} text={answer} />
      </TouchableOpacity>
    )
  }

  const renderQuestion = ({ item }) => {
    const question: Question = item
    return (
      <View style={styles.QUESTION_WRAPPER}>
        <Text style={styles.QUESTION} text={question.question} />
        <RadioButtons
          options={question.allAnswers}
          onSelection={guess => onPressAnser(question, guess)}
          selectedOption={question.guess}
          renderOption={renderAnswer}
        />
        <Button
          style={styles.CHECK_ANSWER}
          onPress={() => checkAnswer(question)}
          text={"Check Answer!"}
        />
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
