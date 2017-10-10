var quiz = [

  {
    question: 'Me and you and you and me',
    answers: [
      'No matter how they toss the dice, it had to be',
      'So happy together',
      'For all my life',
      'Take a crazy chance'
    ],
    correctAnswer: '0',
    rightAnswer: "That's right, my friend!",
    wrongAnswer: "Wrooooonggggggg!"
  },
  
   {
    question: 'Some will win, some will lose',
     answers: [
      'Love is a battlefield',
      'Girls just want to have fun',
      'Some were born to sing the blues',
      'It goes on and on and on and on'
    ],
   
    correctAnswer: '2',
    rightAnswer: "That's right, my friend!",
    wrongAnswer: "Wrooooonggggggg!"
  },
  
     {
    question: 'I got sunshine',
     answers: [
      'On a rainy day',
      'On a cloudy day',
      'On a sunny day',
      'On a blue sky day'
    ],

    correctAnswer: '1',
    rightAnswer: "That's right, my friend!",
    wrongAnswer: "Wrooooonggggggg!"
  },
  
     {
    question: 'Easy come, easy go',
     answers: [
      'Let it out, let it flow',
      'Little high, little low',
      'Little lamb, little goat',
      'Baby steps, baby sighs'
    ],
    correctAnswer: '1',
    rightAnswer: "That's right, my friend!",
    wrongAnswer: "Wrooooonggggggg!"
  },
  
      {
    question: 'Birds flying high',
    answers: [
      'Sun in the sky',
      'Pie in the sky',
      'And Im feeling good',
      'You know how I feel'
    ],
   
    correctAnswer: '3',
    rightAnswer: "That's right, my friend!",
    wrongAnswer: "Wrooooonggggggg!"
  }

];
//Click button to start the game
function startGame() {

    $('.startButton').on('click', function(e) {
    e.stopPropagation();
        $(".start").addClass("hidden");
        $(".quizBody").removeClass("hidden");
        $(".submitButton").removeClass("hidden");
        
        
    });
}

var currentQuestion=0;
var currentScore=0;
var questionCorrect=0;
var questionAnswered=0;
var totalQuestions=5;

function displayQuestion(currentQuestion) {
//render question
  $('.quizQuestion').text(quiz[currentQuestion].question); 
  var quizChoices = '';  
  for(var i = 0; i<quiz[currentQuestion].answers.length; i++) {
        quizChoices += "<input id='option' type='radio' value=\"" + i + "\" name='radio' required>&nbsp;";
        quizChoices +=  quiz[currentQuestion].answers[i];
        quizChoices += '<br>';
   }
   $('.answerChoices').html(quizChoices);
   
//end of render question  

}

  

function submitAnswer(){
    $('.submitButton').on('click', function(e) {
    e.stopPropagation();
    var userAnswer = $('input[name="radio"]:checked').val();
   /*if (userAnswer == undefined) {
          $('.error').removeClass("hidden");
          $('.submitButton').attr('disabled',true);
        }else{
        $('.submitButton').attr('disabled',false); */
        $(".quizBody").addClass("hidden");
        $(".feedback").removeClass("hidden");
        
        
         //get user answer from radio buttons
        
        questionAnswered++;
        currentQuestion++;   
        $(".result").removeClass("hidden");
   
               //Check answer
      
        
       if (userAnswer == quiz[currentQuestion-1].correctAnswer) {
            questionCorrect++;
            $('.resultText').text(quiz[currentQuestion].rightAnswer);  
        }
        
       
        
        else if (questionAnswered == quiz.length){
        //alert("hi");
        $('.quizBody').addClass("hidden");
         $('.feedback').addClass("hidden");
         $('.result').addClass("hidden");
        $('.finalScore').removeClass("hidden");
        $('.finalScoreText').text('Congratulations! You got ' +questionCorrect+ ' out of '+questionAnswered+ ' correct!');
        
        }
        else {
             $('.resultText').text(quiz[currentQuestion].wrongAnswer);
        }   
           //show user progress
         $('.scoreText').text(questionCorrect+ ' out of '+questionAnswered+ ' correct');
         //next question
        $('.nextButton').click(function(e) {
           e.stopPropagation();
          $('.result').addClass("hidden");
            $('.feedback').addClass("hidden");
            $('.quizBody').removeClass("hidden");
            displayQuestion(currentQuestion);         
        });
        
        //start again 
        
           $('.lastButton').click(function(e) {
           e.stopPropagation();
          history.go(0);       
        });
        
       
        
      
        
         
        
    });
}


function handleQuiz(){
startGame();
displayQuestion(currentQuestion);

submitAnswer();


}

$(handleQuiz);

