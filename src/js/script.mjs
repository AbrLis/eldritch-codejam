const greenPathCard = '../../assets/MythicCards/green/';
const bluePathCard = '../../assets/MythicCards/blue/';
const brownPathCard = '../../assets/MythicCards/brown/';
// const difficulties = [
//     {
//         id: 'easy',
//         name: 'Низкая'
//     },
//     {
//         id: 'normal',
//         name: 'Средняя'
//     },
//     {
//         id: 'hard',
//         name: 'Высокая'
//     },
// ];
const ancientsData = [
    {
        id: 'azathoth',
        name: 'azathoth',
        cardFace: '../../Ancients/Azathoth.png',
        firstStage: {
            greenCards: 1,
            brownCards: 2,
            blueCards: 1,
        },
        secondStage: {
            greenCards: 2,
            brownCards: 3,
            blueCards: 1,
        },
        thirdStage: {
            greenCards: 2,
            brownCards: 4,
            blueCards: 0,
        },
    },
    {
        id: 'cthulhu',
        name: 'cthulhu',
        cardFace: '../../Ancients/Cthulthu.png',
        firstStage: {
            greenCards: 0,
            brownCards: 2,
            blueCards: 2,
        },
        secondStage: {
            greenCards: 1,
            brownCards: 3,
            blueCards: 0,
        },
        thirdStage: {
            greenCards: 3,
            brownCards: 4,
            blueCards: 0,
        },
    },
    {
        id: 'iogSothoth',
        name: 'iogSothoth',
        cardFace: '../../Ancients/IogSothoth.png',
        firstStage: {
            greenCards: 0,
            brownCards: 2,
            blueCards: 1,
        },
        secondStage: {
            greenCards: 2,
            brownCards: 3,
            blueCards: 1,
        },
        thirdStage: {
            greenCards: 3,
            brownCards: 4,
            blueCards: 0,
        },
    },
    {
        id: 'shubNiggurath',
        name: 'shubNiggurath',
        cardFace: '../../Ancients/ShubNiggurath.png',
        firstStage: {
            greenCards: 1,
            brownCards: 2,
            blueCards: 1,
        },
        secondStage: {
            greenCards: 3,
            brownCards: 2,
            blueCards: 1,
        },
        thirdStage: {
            greenCards: 2,
            brownCards: 4,
            blueCards: 0,
        },
    },
];
const blueCardsAssets = [
    {
        id: 'blue1',
        cardFace: bluePathCard + 'blue1.png',
        difficulty: 'hard',
        color: 'blue'
    },
    {
        id: 'blue2',
        cardFace: bluePathCard + 'blue2.png',
        difficulty: 'hard',
        color: 'blue'
    },
    {
        id: 'blue3',
        cardFace: bluePathCard + 'blue3.png',
        difficulty: 'easy',
        color: 'blue'
    },
    {
        id: 'blue4',
        cardFace: bluePathCard + 'blue4.png',
        difficulty: 'easy',
        color: 'blue'
    },
    {
        id: 'blue5',
        cardFace: bluePathCard + 'blue5.png',
        difficulty: 'easy',
        color: 'blue'
    },
    {
        id: 'blue6',
        cardFace: bluePathCard + 'blue6.png',
        difficulty: 'hard',
        color: 'blue'
    },
    {
        id: 'blue7',
        cardFace: bluePathCard + 'blue7.png',
        difficulty: 'normal',
        color: 'blue'
    },
    {
        id: 'blue8',
        cardFace: bluePathCard + 'blue8.png',
        difficulty: 'hard',
        color: 'blue'
    },
    {
        id: 'blue9',
        cardFace: bluePathCard + 'blue9.png',
        difficulty: 'normal',
        color: 'blue'
    },
    {
        id: 'blue10',
        cardFace: bluePathCard + 'blue10.png',
        difficulty: 'easy',
        color: 'blue'
    },
    {
        id: 'blue11',
        cardFace: bluePathCard + 'blue11.png',
        difficulty: 'normal',
        color: 'blue'
    },
    {
        id: 'blue12',
        cardFace: bluePathCard + 'blue12.png',
        difficulty: 'normal',
        color: 'blue'
    },
];
const brownCardsAssets = [
    {
        id: 'brown1',
        cardFace: brownPathCard + 'brown1.png',
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown2',
        cardFace: brownPathCard + 'brown2.png',
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown3',
        cardFace: brownPathCard + 'brown3.png',
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown4',
        cardFace: brownPathCard + 'brown4.png',
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown5',
        cardFace: brownPathCard + 'brown5.png',
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown6',
        cardFace: brownPathCard + 'brown6.png',
        difficulty: 'hard',
        color: 'brown'
    },
    {
        id: 'brown7',
        cardFace: brownPathCard + 'brown7.png',
        difficulty: 'hard',
        color: 'brown'
    },
    {
        id: 'brown8',
        cardFace: brownPathCard + 'brown8.png',
        difficulty: 'hard',
        color: 'brown'
    },
    {
        id: 'brown9',
        cardFace: brownPathCard + 'brown9.png',
        difficulty: 'hard',
        color: 'brown'
    },
    {
        id: 'brown10',
        cardFace: brownPathCard + 'brown10.png',
        difficulty: 'hard',
        color: 'brown'
    },
    {
        id: 'brown11',
        cardFace: brownPathCard + 'brown11.png',
        difficulty: 'easy',
        color: 'brown'
    },
    {
        id: 'brown12',
        cardFace: brownPathCard + 'brown12.png',
        difficulty: 'easy',
        color: 'brown'
    },
    {
        id: 'brown13',
        cardFace: brownPathCard + 'brown13.png',
        difficulty: 'easy',
        color: 'brown'
    },
    {
        id: 'brown14',
        cardFace: brownPathCard + 'brown14.png',
        difficulty: 'easy',
        color: 'brown'
    },
    {
        id: 'brown15',
        cardFace: brownPathCard + 'brown15.png',
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown16',
        cardFace: brownPathCard + 'brown16.png',
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown17',
        cardFace: brownPathCard + 'brown17.png',
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown18',
        cardFace: brownPathCard + 'brown18.png',
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown19',
        cardFace: brownPathCard + 'brown19.png',
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown20',
        cardFace: brownPathCard + 'brown20.png',
        difficulty: 'normal',
        color: 'brown'
    },
    {
        id: 'brown21',
        cardFace: brownPathCard + 'brown21.png',
        difficulty: 'easy',
        color: 'brown'
    },
];
const greenCardsAssets = [
    {
        id: 'green1',
        cardFace: greenPathCard + 'green1.png',
        difficulty: 'easy',
        color: 'green'
    },
    {
        id: 'green2',
        cardFace: greenPathCard + 'green2.png',
        difficulty: 'hard',
        color: 'green'
    },
    {
        id: 'green3',
        cardFace: greenPathCard + 'green3.png',
        difficulty: 'hard',
        color: 'green'
    },
    {
        id: 'green4',
        cardFace: greenPathCard + 'green4.png',
        difficulty: 'hard',
        color: 'green'
    },
    {
        id: 'green5',
        cardFace: greenPathCard + 'green5.png',
        difficulty: 'hard',
        color: 'green'
    },
    {
        id: 'green6',
        cardFace: greenPathCard + 'green6.png',
        difficulty: 'hard',
        color: 'green'
    },
    {
        id: 'green7',
        cardFace: greenPathCard + 'green7.png',
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green8',
        cardFace: greenPathCard + 'green8.png',
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green9',
        cardFace: greenPathCard + 'green9.png',
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green10',
        cardFace: greenPathCard + 'green10.png',
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green11',
        cardFace: greenPathCard + 'green11.png',
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green12',
        cardFace: greenPathCard + 'green12.png',
        difficulty: 'easy',
        color: 'green'
    },
    {
        id: 'green13',
        cardFace: greenPathCard + 'green13.png',
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green14',
        cardFace: greenPathCard + 'green14.png',
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green15',
        cardFace: greenPathCard + 'green15.png',
        difficulty: 'normal',
        color: 'green'
    },
    {
        id: 'green16',
        cardFace: greenPathCard + 'green16.png',
        difficulty: 'easy',
        color: 'green'
    },
    {
        id: 'green17',
        cardFace: greenPathCard + 'green17.png',
        difficulty: 'easy',
        color: 'green'
    },
    {
        id: 'green18',
        cardFace: greenPathCard + 'green18.png',
        difficulty: 'easy',
        color: 'green'
    },
];

class GameHelper {
    _currentStage = 0; // Текущая стадия игры
    _gameLevel = 0; // Уровень игры (от 0 до 4)
    _ancientCardIndex = 0; // Для какого древнего раздача (от 0 до 3)
    _stackGreenCard = []; // Полная колода для текущего уровня игры
    _stackBlueCard = [];
    _stackBrownCard = [];
    _stage = []; // Список стадий green,blue,brown с количеством карт
    _gameStackGreen = []; // Отобранная игровая колода для вытягивания
    _gameStackBlue = [];
    _gameStackBrown = [];
    _randomQueue = []; // Случайная последовательность выдачи карт
    _currentLevelStack = {
        '0': {
            'priority': 'easy',
            'next': 'normal',
            'exclude': '',
        },
        '1': {
            'priority': '',
            'next': '',
            'exclude': 'hard',
        },
        '2': {
            'priority': '',
            'next': '',
            'exclude': '',
        },
        '3': {
            'priority': '',
            'next': '',
            'exclude': 'easy',
        },
        '4': {
            'priority': 'hard',
            'next': 'normal',
            'exclude': '',
        }
    }; // Настройка выдачи и приоритетов

    constructor(gameLevel, ancientCardIndex) {
        this._gameLevel = gameLevel;
        this._ancientCardIndex = ancientCardIndex;
        this.initialize();
        this.shuffle([this._gameStackBrown, this._gameStackBlue,
            this._gameStackGreen])
        this.createQueue();
    }

    initialize() {
        // Текущий древний
        let currentAncient = ancientsData[this._ancientCardIndex];
        // Текущий список стадий согласно заданному уровню
        this._stage = [Object.values(currentAncient.firstStage),
            Object.values(currentAncient.secondStage),
            Object.values(currentAncient.thirdStage)];
        // Создание стека доступных карт согласно уровню
        let currentLevel = this._currentLevelStack[this._gameLevel]
        if (currentLevel['priority'] !== '') {
            // Набор приоритетных карт
            this.setStackCard(currentLevel['priority'])
            // И добавление next карт, если есть
            if (currentLevel['next'] !== '') {
                this.setStackCard(currentLevel['next'])
            }
        } else {
            // Иначе добавление карт которые не в списке исключения
            for (let level of ['easy', 'normal', 'hard']) {
                if (currentLevel['exclude'] !== level) {
                    this.setStackCard(level)
                }
            }
            this._stackBrownCard = [this._stackBrownCard.flat(), []];
            this._stackGreenCard = [this._stackGreenCard.flat(), []];
            this._stackBlueCard = [this._stackBlueCard.flat(), []];
        }
        // Заполнение стадий случайными картами из стека доступных,
        // полученных на предыдущем шаге
        this.shuffle([this._stackGreenCard[0], this._stackGreenCard[1],
            this._stackBlueCard[0], this._stackBlueCard[1],
            this._stackBrownCard[0], this._stackBrownCard[1]])
        let sumOfCard = this._stage[0][0] + this._stage[1][0] + this._stage[2][0];
        this.pushGameStack(this._stackGreenCard, this._gameStackGreen, sumOfCard)
        sumOfCard = this._stage[0][1] + this._stage[1][1] + this._stage[2][1];
        this.pushGameStack(this._stackBrownCard, this._gameStackBrown, sumOfCard)
        sumOfCard = this._stage[0][2] + this._stage[1][2] + this._stage[2][2];
        this.pushGameStack(this._stackBlueCard, this._gameStackBlue, sumOfCard)
        // let x = 1;
        // while (x) {
        //     x = this.getRandomCard();
        //     console.log(x.color, x.difficulty);
        // }
    }

    createQueue() {
        // Создание очереди выдачи результатов на текущую стадию
        let stack = [0, 1, 2] // green, blue, brown
        let idx = 0
        for (let card of this._stage[this._currentStage]) {
            for (let i = 0; i < card; i++) {
                this._randomQueue.push(stack[idx]);
            }
            idx++;
        }
        this.shuffle([this._randomQueue])
    }

    getRandomCard() {
        // Получение случайной карты из теущей стадии либо увеличение
        // стадии и отдача результата
        let test = [this._gameStackGreen, this._gameStackBrown, this._gameStackBlue]
        if (this._randomQueue.length > 0) {
            let result = this._randomQueue.pop();
            this._stage[this._currentStage][result]--;
            return test[result].pop();
        }
        if (this._currentStage < 2) {
            this._currentStage++;
            this.createQueue();
            console.log("+ stage")
            return this.getRandomCard();
        }
        return NaN;
    }

    getCurrentStageDeck() {
        // Получение списка доступных карт для текущей стадии
        return this._stage;
    }

    pushGameStack(output, input, count) {
        for (let j = 0; j < count; j++) {
            if (output[0].length > 0) {
                input.push(output[0].pop());
            } else {
                input.push(output[1].pop())
            }
        }
    }

    shuffle(array) {
        for (let arr of array) {
            arr.sort(() => Math.random() - 0.5);
        }
    }

    setStackCard(level) {
        this._stackBlueCard.push(this.getCurrentLevelCard(level, blueCardsAssets));
        this._stackGreenCard.push(this.getCurrentLevelCard(level, greenCardsAssets));
        this._stackBrownCard.push(this.getCurrentLevelCard(level, brownCardsAssets));
    }

    getCurrentLevelCard(level, cardAsset) {
        let result = [];
        for (let card of cardAsset) {
            if (card.difficulty === level) {
                result.push(card)
            }
        }
        return result;
    }
}

// -------------Блок обработки -----------------
let ancientSelect = 0; // начальный древний
let levelSelect = 0; // начальный уровень
let ancient = new GameHelper(levelSelect, ancientSelect)
let isPlay = false;
refreshStageWindow();

// ============Обновление окна стадий ============
function refreshStageWindow() {
    const stages = ancient.getCurrentStageDeck()
    for (const [idxStage, numStage] of stages.entries()) {
        for (const [color, stage] of ['green', 'brown', 'blue'].entries()) {
            let element = document.querySelector(`.stage${idxStage + 1} .${stage}`)
            element.textContent = numStage[color];
        }
    }
}

// ------------Меню уровня сложности--------------
document.querySelector('.center-container').addEventListener('click',
    function (e) {
        let tmpLevel = 0;
        let currentLevel = document.querySelector('.center-container .select');
        for (const [idx, btn] of document.querySelectorAll('.menu-btn').entries()) {
            if (btn === e.target) tmpLevel = idx;
            btn.classList.remove('select');
        }
        e.target.classList.add('select');
        if (tmpLevel === 5) {
            currentLevel.classList.add('select');
            console.log('Запуск начала раздачи');
            ancient = new GameHelper(levelSelect, ancientSelect)
            refreshStageWindow();
            showCard();
            isPlay = true;
            document.querySelector('.right-container img').classList.remove('no-play');
        } else {
            levelSelect = tmpLevel;
        }
    });
// --------------Конец меню----------------------
// --------------Выбор древнего------------------
document.querySelector('.left-container').addEventListener('click',
    function (e) {
        for (const [idx, ancient] of document.querySelectorAll('.left-container' +
            ' img').entries()) {
            ancient.classList.remove('select');
            if (ancient === e.target) {
                e.target.classList.add('select');
                ancientSelect = idx;
            }
        }
    })
// ----------------------------------------------
// --------------Показать карту из колоды--------
function showCard() {
    let card = ancient.getRandomCard()
    if (card) {
        let elem = document.createElement('img');
        elem.src = card.cardFace;
        elem.height = 400;
        elem.width = 285;
        let place = document.querySelector('.show-cards');
        place.textContent = '';
        place.appendChild(elem);
        refreshStageWindow();
    } else {
        isPlay = false;
        document.querySelector('.right-container img').classList.add('no-play');
        console.log('Card is finished');
    }
}

// --------------Разбор колоды------------------
document.querySelector('.right-container img').addEventListener('click',
    function (e) {
        if (!isPlay) return;
        showCard();
    })
