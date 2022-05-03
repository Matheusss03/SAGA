import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

let data = [
  {
      question: "No sistema hexadecimal, que número vem depois de 9?",
      categoria: "Matemática",
      options: ["Número 10","Letra A","Número 16","Letra C"],
      correct_option: "Letra A"
  },
  {
      question: "Quantos zeptómetros estão dentro de um femtómetro?",
      categoria: "Matemática",
      options: ["10","1.000","1.000.000","1.000.000.000"],
      correct_option: "1.000.000"
  },
  {
      question: "Qual é a representação alfanumérica do número imaginário?",
      categoria: "Matemática",
      options: ["e","i","n","x"],
      correct_option: "i"
  },
  {
      question: "Para o número inteiro mais próximo, quantos radianos estão num círculo inteiro?",
      categoria: "Matemática",
      options: ["3","4","5","6"],
      correct_option: "6"
  },
  {
      question: "Qual era o nome do primeiro satélite terrestre artificial, lançado pela União Soviética em 1957?",
      categoria: "Ciências",
      options: ["Voskhod 3KV","Zenit-2","Sputnik 1","Soyuz 7K-OK"],
      correct_option: "Sputnik 1"
  },
  {
    question: "Qual é o elemento mais abundante no universo?",
    categoria: "Ciências",
    options: ["Hidrogênio","Oxigênio","Lítio","Hélio"],
    correct_option: "Hidrogênio"
  },
  {
    question: "Qual a fórmula molecular do Ozônio?",
    categoria: "Ciências",
    options: ["C6H206","N2O","SO4","O3"],
    correct_option: "O3"
  },
  {
    question: "Enquanto a Apple foi formada na Califórnia, em que estado ocidental foi fundada a Microsoft?",
    categoria: "Computação",
    options: ["Colorado","Arizona","Novo México","Washington"],
    correct_option: "Novo México"
  },
  {
    question: ".at é o domínio de nível superior de qual país?",
    categoria: "Computação",
    options: ["Angola","Argentina","Austrália","Áustria"],
    correct_option: "Áustria"
  },
  {
    question: "Este Sistema Operacional móvel tinha a maior quota de mercado em 2012.",
    categoria: "Computação",
    options: ["Symbian","BlackBerry","Android","iOS"],
    correct_option: "iOS"
  }
]

let data2 = []

while(data.length !== 0) {
  let randomIndex = Math.floor(Math.random() * data.length)
  data2.push(data[randomIndex])
  data.splice(randomIndex, 1)
}

data = data2

const QuestionScreen = () => {

  const allQuestions = data;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0)
  const [showNextButton, setShowNextButton] = useState(false)
  const [showScoreModal, setShowScoreModal] = useState(false)

  const validateAnswer = (selectedOption) => {
    let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setIsOptionsDisabled(true);
    if(selectedOption==correct_option){
        // Set Score
        setScore(score+1)
    }
    // Show Next Button
    setShowNextButton(true)
  }

  const handleNext = () => {
    if(currentQuestionIndex== /*allQuestions.length*/5-1){
        // Last Question
        // Show Score Modal
        setShowScoreModal(true)
    }else{
        setCurrentQuestionIndex(currentQuestionIndex+1);
        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionsDisabled(false);
        setShowNextButton(false);
    }
    Animated.timing(progress, {
        toValue: currentQuestionIndex+1,
        duration: 1000,
        useNativeDriver: false
    }).start();
  }

  const restartQuiz = () => {
    let data2 = []

    while(data.length !== 0) {
      let randomIndex = Math.floor(Math.random() * data.length)
      data2.push(data[randomIndex])
      data.splice(randomIndex, 1)
    }

    data = data2

    setShowScoreModal(false);

    setCurrentQuestionIndex(0);
    setScore(0);

    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
    setShowNextButton(false);
    Animated.timing(progress, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false
    }).start();
  }

  const renderQuestion = () => {
    return (
        <View style={{
            marginVertical: 40
        }}>

            <View style={{
                flexDirection: 'row',
                alignItems: 'flex-end'
            }}>
                <Text style={{color: COLORS.white, fontSize: 20, opacity: 0.6, marginRight: 2}}>{currentQuestionIndex+1}</Text>
                <Text style={{color: COLORS.white, fontSize: 18, opacity: 0.6}}>/ {/*allQuestions.length*/5}</Text>
            </View>

            <Text style={{
                color: COLORS.white,
                fontSize: 30
            }}>{allQuestions[currentQuestionIndex]?.question}</Text>

            <Text style={{
                color: COLORS.cat,
                fontSize: 20
            }}>{allQuestions[currentQuestionIndex]?.categoria}</Text>
        </View>
    )
  }

  const renderOptions = () => {
    /*
    for (let index = 0; index < allQuestions.length; index++) {
      allQuestions[index].options = allQuestions[index].options.sort(() => Math.random() - 0.5)
    }
    */
    return (
        <View>
            {
                allQuestions[currentQuestionIndex]?.options.map(option => (
                    <TouchableOpacity 
                    onPress={()=> validateAnswer(option)}
                    disabled={isOptionsDisabled}
                    key={option}
                    style={{
                        borderWidth: 3, 
                        borderColor: option==correctOption 
                        ? COLORS.success
                        : option==currentOptionSelected 
                        ? COLORS.error 
                        : COLORS.secondary+'40',
                        backgroundColor: option==correctOption 
                        ? COLORS.success +'20'
                        : option==currentOptionSelected 
                        ? COLORS.error +'20'
                        : COLORS.secondary+'20',
                        height: 60, borderRadius: 20,
                        flexDirection: 'row',
                        alignItems: 'center', justifyContent: 'space-between',
                        paddingHorizontal: 20,
                        marginVertical: 10
                    }}
                    >
                        <Text style={{fontSize: 20, color: COLORS.white}}>{option}</Text>


                        {
                            option==correctOption ? (
                                <View style={{
                                    width: 30, height: 30, borderRadius: 30/2,
                                    backgroundColor: COLORS.success,
                                    justifyContent: 'center', alignItems: 'center'
                                }}>
                                    <MaterialCommunityIcons name="check" style={{
                                        color: COLORS.white,
                                        fontSize: 20
                                    }} />
                                </View>
                            ): option == currentOptionSelected ? (
                                <View style={{
                                    width: 30, height: 30, borderRadius: 30/2,
                                    backgroundColor: COLORS.error,
                                    justifyContent: 'center', alignItems: 'center'
                                }}>
                                    <MaterialCommunityIcons name="close" style={{
                                        color: COLORS.white,
                                        fontSize: 20
                                    }} />
                                </View>
                            ) : null
                        }

                    </TouchableOpacity>
                ))
            }
        </View>
    )
  }

  const renderNextButton = () => {
    if(showNextButton){
        return (
            <TouchableOpacity
            onPress={handleNext}
            style={{
                marginTop: 20, width: '100%', backgroundColor: COLORS.accent, padding: 20, borderRadius: 5
            }}>
                <Text style={{fontSize: 20, color: COLORS.white, textAlign: 'center'}}>Próximo</Text>
            </TouchableOpacity>
        )
    }else{
        return null
    }
  }


  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnim = progress.interpolate({
      inputRange: [0, /*allQuestions.length*/5],
      outputRange: ['0%','100%']
  })
  const renderProgressBar = () => {
      return (
          <View style={{
              width: '100%',
              height: 20,
              borderRadius: 20,
              backgroundColor: '#00000020',

          }}>
              <Animated.View style={[{
                  height: 20,
                  borderRadius: 20,
                  backgroundColor: COLORS.accent
              },{
                  width: progressAnim
              }]}>

              </Animated.View>

          </View>
      )
  }


  return (
     <SafeAreaView style={{
         flex: 1
     }}>
         <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
         <View style={{
             flex: 1,
             paddingVertical: 40,
             paddingHorizontal: 16,
             backgroundColor: COLORS.background,
             position:'relative'
         }}>


             { renderProgressBar() }


             {renderQuestion()}


             {renderOptions()}


             {renderNextButton()}


             <Modal
             animationType="slide"
             transparent={true}
             visible={showScoreModal}
             >
                 <View style={{
                     flex: 1,
                     backgroundColor: COLORS.primary,
                     alignItems: 'center',
                     justifyContent: 'center'
                 }}>
                     <View style={{
                         backgroundColor: COLORS.white,
                         width: '90%',
                         borderRadius: 20,
                         padding: 20,
                         alignItems: 'center'
                     }}>
                         <Text style={{fontSize: 30, fontWeight: 'bold'}}>{ score> (/*allQuestions.length*/5/2) ? 'Parabéns!!' : 'Opa!' }</Text>

                         <View style={{
                             flexDirection: 'row',
                             justifyContent: 'flex-start',
                             alignItems: 'center',
                             marginVertical: 20
                         }}>
                             <Text style={{
                                 fontSize: 30,
                                 color: score> (/*allQuestions.length*/5/2) ? COLORS.success : COLORS.error
                             }}>{score}</Text>
                              <Text style={{
                                  fontSize: 20, color: COLORS.black
                              }}>/ { /*allQuestions.length*/5 }</Text>
                         </View>

                         <TouchableOpacity
                         onPress={restartQuiz}
                         style={{
                             backgroundColor: COLORS.accent,
                             padding: 20, width: '100%', borderRadius: 20
                         }}>
                             <Text style={{
                                 textAlign: 'center', color: COLORS.white, fontSize: 20
                             }}>Refazer</Text>
                         </TouchableOpacity>

                     </View>

                 </View>
             </Modal>

         </View>
     </SafeAreaView>
  )

/*
return (
  <View>
    <Text>QuestionScreen</Text>
  </View>
)
*/
}

const {width, height} = Dimensions.get('window');

const COLORS = {
    primary: "#252c4a",
    secondary: '#1E90FF',
    accent: '#3498db',
    
    success: '#00C851',
    error: '#ff4444',

    black: "#171717",
    white: "#FFFFFF",
    background: "#252C4A",

    cat: "#00FFFF"
}


const SIZES = {
    base: 10,
    width,
    height
}

export default QuestionScreen