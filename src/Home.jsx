import React from 'react'
// import { AppContext } from './context'
// import { useGlobleContext } from './context';
import Search from './Search';
import Movie from './Movie';

function Home() {
  //we take data from context.jsx
  //we use context hook(consumer)
  // const name = useContext(AppContext);
  // simple way of ^^^^^^^^^^^^^^^^^^^^^
  // const name = useGlobleContext();
  return (
    <>
     <Search/>
    <Movie/>
    </>
  )
}

export default Home
