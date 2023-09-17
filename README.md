# Planet Hunt

[![Moove It](https://circleci.com/gh/moove-it/react-native-template.svg?style=svg)](https://app.circleci.com/pipelines/github/moove-it/react-native-template?branch=master)

Here is the short and sweet spec of Fluyo coding test task app.

## Demo

- App Download Link - https://portal.testapp.io/apps/install/878jagpVnrkrk

## Tech Stack used in Fluyo coding test

- [React Native CLI] - Used to define app screens and access native feature.
- [React Navigation] - Used to define stack screen.
- [Firebase & Firestore] - Used seed exercise to firestore and fetch firestore data.

## Folder structure

This template follows a very simple project structure:

- `_app`: This folder is the main container of all the code inside your application.
  - `@lib`:
    - `theme` : Defined the theme constants
  - `firebase`: Contains the required files to seed data in firestore
  - `components`:
    - `navigation`: Folder to store the navigators.
      - `StackNavigator` :
      - `TabNavigator` :
    - `screens`: Folder that contains all your application screens/features.
      - `Screen`: Each screen should be stored inside its folder and inside it a file for its code and a separate one for the styles and tests.
        - `screen.tsx`
        - `Screen_styles.ts`
        - `utils` : contains respective screens data, hooks and functions
  - `App.tsx`: Main component that starts your whole app.
  - `index.ts`: Entry point of your application as per React-Native standards.
