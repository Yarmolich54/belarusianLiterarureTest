const questions = [
    {
      question: "Вопрос 1: Какой язык программирования вы предпочитаете?",
      answers: {
        'a': "JavaScript",
        'b': "Python",
        'c': "Java",
        'd': "C++"
      },
      correctAnswer: 'a'
    },
    {
      question: "Вопрос 2: Какой язык программирования вы предпочитаете?",
      answers: {
        'a': "кке",
        'b': "рйк",
        'c': "ор",
        'd': "фпра"
      },
        correctAnswer: 'b'
      },
      {
        question: "Вопрос 3: Какой язык программирования вы предпочитаете?",
        answers: {
          'a': "кке",
          'b': "рйк",
          'c': "ор",
          'd': "фпра"
        },
          correctAnswer: 'c'
        },
        {
          question: "Вопрос 4: Какой язык программирования вы предпочитаете?",
          answers: {
            'a': "кке",
            'b': "рйк",
            'c': "ор",
            'd': "фпра"
          },
            correctAnswer: 'd'
          },
      {
        question: "ЕСЛИ ВЫ ВИДИТЕ ЭТОТ ВОПРОС ТО С КОДОМ ЧТО ТО НЕ ТАК",
        answers: {
          'a': "А",
          'b': "АА",
          'c': "ААА",
          'd': "АААА"
        },
          correctAnswer: '0'
        }
      
    
  ];
  
var numberQuestionIndex = 0;
var rightAnswers = 0;

var nextButton = document.getElementById('next');
var questionText = document.getElementById('quesCont');
var answer1Text = document.getElementById('ansCont1');
var answer2Text = document.getElementById('ansCont2');
var answer3Text = document.getElementById('ansCont3');
var answer4Text = document.getElementById('ansCont4');

function showTextes() {
  questionText.textContent = questions[numberQuestionIndex].question;
  answer1Text.textContent = questions[numberQuestionIndex].answers.a;
  answer2Text.textContent = questions[numberQuestionIndex].answers.b;
  answer3Text.textContent = questions[numberQuestionIndex].answers.c;
  answer4Text.textContent = questions[numberQuestionIndex].answers.d;
}

showTextes();
nextButton.addEventListener('click', function() {  
  var selectedAnswer = document.querySelector('input[name="answer"]:checked');
  var selectedValue = selectedAnswer.value ? selectedAnswer.value : null;
  var rightAnswerValue = questions[numberQuestionIndex].correctAnswer;
  

    if (selectedValue == rightAnswerValue) {
      rightAnswers++;
    } 
  numberQuestionIndex++;

  if (numberQuestionIndex < questions.length - 1) {
    showTextes();
  } else {
      questionText.textContent = `тест пройден ${rightAnswers}/${questions.length - 1}`;
      document.querySelector('.answers_block').style.display = 'none';
      nextButton.style.display = 'none';
  }
  selectedAnswer.checked = false;
});