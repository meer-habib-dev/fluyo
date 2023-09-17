import firestore from '@react-native-firebase/firestore';
export interface ExerciseType {
  id: string;
  exampleText: string;
  question: string;
  answer: string;
  options: string[];
  questionText: string[];
}

export const seedData: ExerciseType[] = [
  {
    id: '1',
    exampleText: 'The HOUSE is small',
    question: 'Das _______ ist klein',
    answer: 'hause',
    options: ['foigen', 'schaf', 'bereiden', 'hause'],
    questionText: ['Das', 'blank', 'ist', 'klein'],
  },
  {
    id: '2',
    exampleText: 'The sky is BLUE',
    question: 'De lucht is _______',
    answer: 'Blauw',
    options: ['Rood', 'Blauw', 'Roze', 'Zwart'],
    questionText: ['De', 'lucht', 'is', 'blank'],
  },
  {
    id: '3',
    exampleText: 'Messi plays FOODBALL',
    question: 'Messi speelt _______',
    answer: 'Voedselbal',
    options: ['Voedselbal', 'Krekel', 'Boksen', 'basketbal'],
    questionText: ['Messi', 'plays', 'blank'],
  },
  {
    id: '4',
    exampleText: 'Elephants are BIG',
    question: 'Olifanten zijn _______',
    answer: 'Groot',
    options: ['Rood', 'Roze', 'Groot', 'Klein'],
    questionText: ['Olifanten', 'zijn', 'blank'],
  },
  {
    id: '5',
    exampleText: 'You are SMART',
    question: 'Jij bent  _______',
    answer: 'Slim',
    options: ['Slim', 'Dom', 'Schattig', 'Mooi'],
    questionText: ['Jij', 'bent', 'blank'],
  },
];

export const populateFirestoreWithSeedData = async () => {
  const exercisesRef = firestore().collection('exercises');

  for (const exercise of seedData) {
    try {
      await exercisesRef.doc(exercise.id).set(exercise);
    } catch (error) {
      console.error('Error adding exercise:', error);
    }
  }
};
