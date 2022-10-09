import React from 'react';

import HeadText from './components/HeadText/HeadText';
import SignupForm from "./components/SignupForm/SignupForm";
import Footer from "./components/Footer/Footer";

const App = ()=> {
  return (
    <div className='container'>
      <main>
        <HeadText />
        <SignupForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
