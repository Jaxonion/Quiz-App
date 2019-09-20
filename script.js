const STORE = [
    //This aray of objects contains all of the Questions and answer options
  
    //Question 1
    {
      question: 'How many wheels does a skateboard have?',
      answerOptions: ['A skateboard has 1 wheel', 'A skateboard has 2 wheels', 'A skateboard has 3 wheels', 'A skateboard has 4 wheels'],
      rightAnswer: 'Q4',
      correctAnswer: 'A skateboard has 4 wheels'
    },
    //Question 2
    {
      question: 'Who invented the kickflip Mctwist?',
      answerOptions: ['Nyjah Houston', 'Bob Burnquist', 'Chris Joslin', 'Tony Hawk'],
      rightAnswer: 'Q4',
      correctAnswer: 'Tony Hawk'
    },
    //Question 3
    {
      question: 'What is it called when you do a 180 and at 90 degrees your back is facing the way you are headed?',
      answerOptions: ['Backside 180', '180', 'Frontside 180', 'Inverted 180'],
      rightAnswer: 'Q1',
      correctAnswer: 'Backside 180'
    },
    //Question 4
    {
      question: 'What year was the first skateboard built?',
      answerOptions: ['1952', '1967', '1963', '1971'],
      rightAnswer: 'Q2',
      correctAnswer: '1967'
    },
    //Question 5
    {
      question: 'Whos is a famous skateboarder?',
      answerOptions: ['Keanu Reeves', 'John Banks', 'Samuel L. Jackson', 'Tony Hawk'],
      rightAnswer: 'Q4',
      correctAnswer: 'Tony Hawk'
    },
    //Question 6
    {
      question: 'Which of these tricks is not a real trick?',
      answerOptions: ['Rock-and-Roll', 'Hard flip', 'Brockel flip', 'Swiss flip'],
      rightAnswer: 'Q4',
      correctAnswer: 'Swiss flip'
    },
    //Question 7
    {
      question: 'Which of these is concidered unfashionable to do on a skateboard?',
      answerOptions: ['Powerslide', 'Pushing mongo', 'Ride down stairs', 'Flip the board with your hand'],
      rightAnswer: 'Q2',
      correctAnswer: 'Pushing mongo (pushing with front foot)'
    },
    //Question 8
    {
      question: `what's it call when someone grabs their board by one of its trucks?`,
      answerOptions: ['Top Grab', 'Mall Grab', 'Stale Grab', 'Truck Grab'],
      rightAnswer: 'Q2',
      correctAnswer: 'Mall Grab (grabing your skateboard by the trucks)'
    },
    //Question 9
    {
      question: 'Which one of these is a basic trick?',
      answerOptions: ['Lazer Flip', 'Ollie', 'Backside Heelflip', 'Tre Flip'],
      rightAnswer: 'Q2',
      correctAnswer: 'Ollie'
    },
    //Question 10
    {
      question: 'Which one of these would be concidered a vert obstacle?',
      answerOptions: ['Stair Set', 'Handrail', 'Table', 'Quarter Pipe'],
      rightAnswer: 'Q4',
      correctAnswer: 'Quarter Pipe'
    }
  ]
  
  //global variable of what page your on
  let pageNumber = 0;
  
  let amountAnsweredRight = 0
  //global variable of percentage score
  let score = (amountAnsweredRight/(pageNumber-1)*100)
  
  
  
  function updateScore() {
    $('.js-question-number').text(pageNumber);
    $('.percent-correct').text(`${(amountAnsweredRight/(pageNumber-1)*100)}%`)
  }
  
  
  function addTextToHtml(pageNumber) {
    $('.question-title').text(STORE[pageNumber-1].question)
    $('.question-1').text(STORE[pageNumber - 1].answerOptions[0])
    $('.question-2').text(STORE[pageNumber - 1].answerOptions[1])
    $('.question-3').text(STORE[pageNumber - 1].answerOptions[2])
    $('.question-4').text(STORE[pageNumber - 1].answerOptions[3])
  }
  
  function renderPage(pageNumber){
    //will handle rendering current questions/options and handlePage
    if (pageNumber > 0 && pageNumber < 11) {
    addTextToHtml(pageNumber);
    }
  }
  
  
  function startQuiz() {
    $('.start-quiz').on('click', `.js-start-button`, function(event) {
      console.log(`ran 'startQuiz' function`);
      $('.start-quiz').hide()
      $('.question-box').show()
      $('.question-box').css('display', 'flex')
      pageNumber ++;
      updateScore(pageNumber)
      console.log(`question number changed to '${pageNumber}'`);
      renderPage(pageNumber);
    })
  }
  
  function giveResponse() {
      $('.question-box').hide()
      $('.response-box').show()
      $('.response-box').css('display', 'flex')
      isAnswerCorrect()
  }
  
  function continueButtonClicked() {
    $('.response-box').on('click', '.continue-button', function(event){
      console.log(`'continue-button' clicked`);
      $('.response-box').hide()
      $('.question-box').show()
      updateScore(pageNumber);
      console.log(`score updated`)
      if (pageNumber > 10) {
        $('.question-box').hide()
        $('.js-question-counting').hide()
        $('.percent-correct-li').hide()
        $('.score-page').show()
        $('.final-score').text(`Your score is ${(amountAnsweredRight/(pageNumber-1)*100)}%`)
  
      }
    })
  }
  
  function addHtml() {
    //will add HTML in order to render page
    $('first-question').text()
  };
  
  function toggleStyleClass() {
    //will toggle CSS styling depending on whether the question has a picture or not.
  
  }
  
  function nextQuestionButtonClicked() {
    //will handle when submit button is clicked and call the renderPage function
    $('.question-box').on('click', '.next-question', event => {
      event.preventDefault();
      console.log(`next button clicked`)
      console.log(`amount right is ${amountAnsweredRight}`)
      console.log(`page number is ${pageNumber}` )
      console.log(`'next button' clicked`);
      pageNumber ++;
      console.log(`pageNumber changed to ${pageNumber}`);
      $('.percent-correct-li').show()
      renderPage(pageNumber);
      giveResponse()
      updateScore()
  
    })
    
  };
  
  
  
  function isAnswerCorrect() {
    //will find out if submitted answer is correct
    console.log(`'isAnswerCorrect' ran`)
  console.log(`Right answer is ${STORE[pageNumber - 2].rightAnswer}`)
  console.log(`Selected answer is ${$('.questions:checked').val()}`)
    if ($('.questions:checked').val() === STORE[pageNumber-2].rightAnswer)  {
      updateScore()
      $('.answer-response').hide()
      $('.response').text('You landed that one! That was narly!')
      $('.response-picture').attr('src', 'Pictures/_MG_0926.jpg')
      amountAnsweredRight ++;
      console.log(`${amountAnsweredRight} is the amount answered right`)
      console.log(`${score} is the score`)
      return true
    }
    else {
      updateScore()
      console.log(STORE[pageNumber - 1].correctAnswer)
      $('.answer-response').show()
      $('.correct-answer-is').text(STORE[pageNumber - 2].correctAnswer)
      $('.response').text(`You're Biffed on that one!`)
      $('.response-picture').attr('src', 'Pictures/IMG_1101_Moment.jpg')
      console.log(`${amountAnsweredRight} is the amount answered right`)
      return false
    }
  };
  
  
  function handlePage() {
  //will handle calling all the functions
    renderPage(pageNumber);
    startQuiz();
    nextQuestionButtonClicked();
    continueButtonClicked()
  
  
  };
  
  handlePage()