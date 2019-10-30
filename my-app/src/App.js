import React from 'react';
import Header from './components/header';
import Content from './components/content';
function App() {
    return (
       <>
           <Header />
           <Content name='Andrew'/>
           <Content name='Marina'/>
           <Content name='Mark'/>
           {/*<Footer />*/}
       </>

    );
}

export default App;