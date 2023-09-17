import React from 'react';
import RootNavigation from './_app/components/routes/root_navigation';
import {seedFirestore} from './_app/firebase/populateFirestoreWithSeedData';
seedFirestore();
function App(): JSX.Element {
  return <RootNavigation />;
}

export default App;
