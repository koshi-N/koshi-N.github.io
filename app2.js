const quiz = [
    {
        question: 'What is the meaning of "face the music"?',
        answers: [
    'agree',
    'accept responsibility',
    'take the risk',
    'control the situation',
    '試験'
        ],
        correct: 'accept responsibility'
}, { 
    question: 'What is the meaning of "hit the nail on the head"?',
    answers: [
    'experience',
    'memorize it',
    'accept the consequences',
    'absolutely right',
    '試験'
        ],
        correct: 'absolutely right'

}, {
    question: 'What is the meaning of "stick your neck out"?',
    answers: [
'watch out',
'get out of the way',
'look in front of you',
'risk it',
'試験'
    ],
    correct: 'risk it'
}, {
    question: 'What is the meaning of "an old hand"?',
    answers: [
'lazy',
'an old person',
'experienced',
'tired',
'試験'
    ],
    correct: 'experienced'
}, { 
    question: 'Would you _______ my dog for me this weekend?',
answers: [
    'look',
    'look after',
    'look down',
    'look up',
    'last'
        ],
        correct: 'last'
}, { 
    question: 'My neighbour _______ eggs yesterday.',
answers: [
    'ran',
    'ran out of',
    'ran into',
    'ran way',
    'last'
        ],
        correct: 'last'
}, { 
    question: 'We need to _____ ____ a few more chairs so everyone can sit down.',
answers: [
    'find out',
    'come out',
    'set up',
    'pick up',
    'last'
        ],
        correct: 'last'
}, { 
    question: 'Can you ____ ___ some food on the way home from work please?',
answers: [
    'come up',
    'pick up',
    'set up',
    'go back',
    'last'
        ],
        correct: 'last'
}, { 
    question: 'There is a debate _____ ____ right now between the two parties.',
answers: [
    'pointing out',
    'getting out',
    'going on',
    'takes on',
    'last'
        ],
        correct: 'last'
}, { 
    question: '_____ ___ after the news, our cooking program will feature cheese.',
answers: [
    'turning out',
    'going on',
    'coming up',
    'growing up',
    'last'
        ],
        correct: 'last'
}, { 
    question: 'We need to _____ _____ who did this to her.',
answers: [
    'pick up',
    'find out',
    'go back',
    'came out',
    'last'
        ],
        correct: 'last'
}, { 
    question: 'We need experts to _____ ____ and give us advice.',
answers: [
    'get out',
    'take on',
    'came in',
    'go back',
    'last'
        ],
        correct: 'last'
}, { 
    question: 'She ____ ___ to the kitchen with a bottle of fancy wine.',
answers: [
    'found out',
    'took on',
    'came out',
    'came back',
    'last'
        ],
        correct: 'last'
}, { 
    question: 'Do you think he will ____ ____ and buy the whole company? ',
    // もしシングルコーテーションが文中にあったらどうする
answers: [
    'go on',
    'point out',
    'get out',
    'go out',
    'last'
        ],
        correct: 'last'
}, { 
    question: 'Does anyone have any questions before I ____ ____ to the next chapter?',
answers: [
    'going on',
    'go out',
    'go on',
    'pick up',
    'last'
        ],
        correct: 'last'
}, { 
    question: 'He washed the dishes and _______ ______ to his room.',
answers: [
    'came back',
    'found out',
    'went back',
    'picked up',
    'last'
        ],
        correct: 'last'
}, { 
    question: 'Their new album is _____ ____ next month.',
answers: [
    'growing up',
    'getting out',
    'taking on',
    'coming out',
    'last'
        ],
        correct: 'last'
}, { 
    question: 'Her suspicion _______ ______ to be justified.',
answers: [
    'turned out',
    'coming out',
    'went back',
    'picked up',
    'last'
        ],
        correct: 'last'
}, { 
    question: 'An advisory committee is being _____ __.',
answers: [
    'grown up',
    'gotten out',
    'set up',
    'came up',
    'last'
        ],
        correct: 'last'
}, { 
    question: 'She went into the bank and ____ ___ with some money',
answers: [
    'went on',
    'came out',
    'came up',
    'pointed out',
    'last'
        ],
        correct: 'last'
}, { 
    question: 'He was technically dead for a few seconds before the doctor ____ him _____ to life.',
answers: [
    'held up',
    'stood up',
    'brought back',
    'took over',
    'last'
        ],
        correct: 'last'
}, { 
    question: '_____ ____ on those days, we had a very happy life.',
answers: [
    'putting up',
    'going ahead',
    'looking back',
    'taking up',
    'last'
        ],
        correct: 'last'
}, { 
    question: 'I will not _____ ____ with your bad behavior for much longer.',
answers: [
    'carry out',
    'pull out',
    'put up',
    'come down',
    'last'
        ],
        correct: 'last'
} , { 
    question: 'These are really old shoes but they are _____ ____ quite well.',
answers: [
    'carrying out',
    'holding up',
    'going ahead',
    'coming down',
    'last'
        ],
        correct: 'last'
} 
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


   

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;


const setupQuiz = () => {
document.getElementById('js-question').textContent = quiz[quizIndex].question;
let buttonIndex = 0
while(buttonIndex < $button.length) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
}
}
setupQuiz();

// クリックしたら正誤判定
const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent) {
        window.alert('correct!');
        score++;
    }else{
    window.alert('wrong...');
    }
quizIndex++;

    if(quizIndex < quizLength){
    setupQuiz();
    }else{
        window.alert('finish! your score is' + score + '/' + quizLength);
    }
     };

    
let hendleIndex = 0;
while (hendleIndex < buttonLength) {
    $button[hendleIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    hendleIndex++;
}


// DOM操作練習
const span = document.getElementById('sec');
console.log(span);
const sec = span.textContent = "00";
