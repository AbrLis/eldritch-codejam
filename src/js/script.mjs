const greenPathCard = '../../MythicCards/green/'
const bluePathCard = '../../MythicCards/blue/'
const brownPathCard = '../../MythicCards/brown/'
const difficulties = [
    {
        id: 'easy',
        name: 'Низкая'
    },
    {
        id: 'normal',
        name: 'Средняя'
    },
    {
        id: 'hard',
        name: 'Высокая'
    },
]
const ancientsData = [
    {
        id: 'azathoth',
        name: 'azathoth',
        cardFace: '../../Ancients/Azathoth.png',
        firstStage: {
            greenCards: 1,
            blueCards: 1,
            brownCards: 2,
        },
        secondStage: {
            greenCards: 2,
            blueCards: 1,
            brownCards: 3,
        },
        thirdStage: {
            greenCards: 2,
            blueCards: 0,
            brownCards: 4,
        },
    },
    {
        id: 'cthulhu',
        name: 'cthulhu',
        cardFace: '../../Ancients/Cthulthu.png',
        firstStage: {
            greenCards: 0,
            blueCards: 2,
            brownCards: 2,
        },
        secondStage: {
            greenCards: 1,
            blueCards: 0,
            brownCards: 3,
        },
        thirdStage: {
            greenCards: 3,
            blueCards: 0,
            brownCards: 4,
        },
    },
    {
        id: 'iogSothoth',
        name: 'iogSothoth',
        cardFace: '../../Ancients/IogSothoth.png',
        firstStage: {
            greenCards: 0,
            blueCards: 1,
            brownCards: 2,
        },
        secondStage: {
            greenCards: 2,
            blueCards: 1,
            brownCards: 3,
        },
        thirdStage: {
            greenCards: 3,
            blueCards: 0,
            brownCards: 4,
        },
    },
    {
        id: 'shubNiggurath',
        name: 'shubNiggurath',
        cardFace: '../../Ancients/ShubNiggurath.png',
        firstStage: {
            greenCards: 1,
            blueCards: 1,
            brownCards: 2,
        },
        secondStage: {
            greenCards: 3,
            blueCards: 1,
            brownCards: 2,
        },
        thirdStage: {
            greenCards: 2,
            blueCards: 0,
            brownCards: 4,
        },
    },
]
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
]
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
]
const greenCardsAssets = [
    {
        id: 'blue1',
        cardFace: greenPathCard + 'blue1.png',
        difficulty: 'hard',
        color: 'blue'
    },
    {
        id: 'blue2',
        cardFace: greenPathCard + 'blue2.png',
        difficulty: 'hard',
        color: 'blue'
    },
    {
        id: 'blue3',
        cardFace: greenPathCard + 'blue3.png',
        difficulty: 'easy',
        color: 'blue'
    },
    {
        id: 'blue4',
        cardFace: greenPathCard + 'blue4.png',
        difficulty: 'easy',
        color: 'blue'
    },
    {
        id: 'blue5',
        cardFace: greenPathCard + 'blue5.png',
        difficulty: 'easy',
        color: 'blue'
    },
    {
        id: 'blue6',
        cardFace: greenPathCard + 'blue6.png',
        difficulty: 'hard',
        color: 'blue'
    },
    {
        id: 'blue7',
        cardFace: greenPathCard + 'blue7.png',
        difficulty: 'normal',
        color: 'blue'
    },
    {
        id: 'blue8',
        cardFace: greenPathCard + 'blue8.png',
        difficulty: 'hard',
        color: 'blue'
    },
    {
        id: 'blue9',
        cardFace: greenPathCard + 'blue9.png',
        difficulty: 'normal',
        color: 'blue'
    },
    {
        id: 'blue10',
        cardFace: greenPathCard + 'blue10.png',
        difficulty: 'easy',
        color: 'blue'
    },
    {
        id: 'blue11',
        cardFace: greenPathCard + 'blue11.png',
        difficulty: 'normal',
        color: 'blue'
    },
    {
        id: 'blue12',
        cardFace: greenPathCard + 'blue12.png',
        difficulty: 'normal',
        color: 'blue'
    },
];

console.log(ancientsData[0]);