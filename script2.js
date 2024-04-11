const questions = [
    {
      question: "Дзе і калі нарадзіўся Іван Шамякін?",
      answers: {
        'a': "1921г в. Карма",
        'b': "1925г в. Цярэшкавічы",
        'c': "1927г в. Пясочная Буда",
        'd': "1929г в. Краўцоўка"
      },
      correctAnswer: 'a'
    },
    {
      question: "У якіх вайсках быў Шамякін у ВАВ? ",
      answers: {
        'a': "У пяхоце",
        'b': "У артэлерыі",
        'c': "Быў партызанам",
        'd': "У авіацыі"
      },
        correctAnswer: 'b'
      },
      {
        question: "Як назаываецца яго апавяданне пра барацьбу з фашыстамі на Севере?",
        answers: {
          'a': "”Сэрца на далони”",
          'b': "”Сатанінскі тур”",
          'c': "“Мост”",
          'd': "“У снежнай пустыні”"
        },
          correctAnswer: 'd'
        },
        {
          question: "Як называецца самае вядомае апавяданне Шамякіна пра ВАВ?",
          answers: {
            'a': "“Помста”",
            'b': "“Зеніт”",
            'c': "“Злая зорка”",
            'd': "“Вазьму твой боль”"
          },
            correctAnswer: 'a'
          },
          {
            question: "Як называецца апавяданне Шамякіна пра партызанскі рух? ",
            answers: {
              'a': "“Трывожнае шчасце”",
              'b': "“Глыбокая плынь”",
              'c': "“Агонь і снег”",
              'd': "“Пошукі сустрэчы”"
            },
              correctAnswer: 'b'
            },
            {
              question: "У якім годзе Шамякіну было прысвоена званне народнага Пісьменніка БССР?",
              answers: {
                'a': "1945",
                'b': "1962",
                'c': "1970",
                'd': "1972"
              },
                correctAnswer: 'd'
              },
              {
                question: "Назавіце яго самы вядомы гістарычны раман ",
                answers: {
                  'a': "”Падзенне”",
                  'b': "“Вялікая княгіня”",
                  'c': "“Палесская мадонна”",
                  'd': "“Помста”"
                },
                  correctAnswer: 'b'
                },
                {
                  question: "Як называецца апавядаданне Шамякіна пра аварыю на ЧАЭС?",
                  answers: {
                    'a': "“Злая зорка”",
                    'b': "“Пошукі прытулку”",
                    'c': "“Роздум на апошнім перагоне”",
                    'd': "“Крыніцы”"
                  },
                    correctAnswer: 'a'
                  },
                  {
                    question: "Хто з героеў рамана “Сэрца на далоні” трымае сэрца на далоні?",
                    answers: {
                      'a': "Зося Савіч",
                      'b': "Сямён Гукан",
                      'c': "Кірыў Шышковіч",
                      'd': "Антон Яраш"
                    },
                      correctAnswer: 'd'
                    },
                    {
                      question: "Што звязвае Антона Яраша і Зосю Савіч?",
                      answers: {
                        'a': "Зося выратавала Яраша на вайне",
                        'b': "Яны вучылісь у адным класе",
                        'c': "Яны брат і сястра",
                        'd': "Іх першае каханне"
                      },
                        correctAnswer: 'a'
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
var numCountBlock = document.querySelector('.number_count_block');
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

numCountBlock.textContent = `${numberQuestionIndex+1}/${questions.length - 1}`;
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
    numCountBlock.textContent = `${numberQuestionIndex+1}/${questions.length - 1}`;
    showTextes();
  } else {
      questionText.textContent = `тест пройден ${rightAnswers}/${questions.length - 1}`;
      document.querySelector('.answers_block').style.display = 'none';
      nextButton.style.display = 'none';
      numCountBlock.style.display = 'none';
  }
  selectedAnswer.checked = false;
});