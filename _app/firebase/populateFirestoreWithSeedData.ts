import {populateFirestoreWithSeedData} from './seedData';

export const seedFirestore = async () => {
  try {
    await populateFirestoreWithSeedData();
    console.log('Seed data successfully added to Firestore.');
  } catch (error) {
    console.error('Error seeding Firestore:', error);
  }
};
