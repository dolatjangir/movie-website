//context <API></API>
//context Hook
import React, { useContext, useEffect, useState } from "react";

//context api(warehouse)
//provider
//consumer / not //// use ---useContext()HOOK
//we use a .env file place of api key
//${process.env.REACT_APP_API_KEY}
export const API_URL =`http://www.omdbapi.com/?apikey=9573f72`;
const AppContext = React.createContext();

//we need to create a provider fun.

//a provider is a areas delivery boy

//we give AppProvider in main.jsx then we take data parent to child
//when we take children then our app.jsx get all data
const AppProvider = ({children}) => {
    const [isLoading ,setIsLoading] = useState(true);
    const [movie ,setMovie] = useState([]);
    const [isError ,setisError] = useState( {show: "false" ,msg:""});
    const[quary , setQuery] = useState("titanic");
    const getMovies = async(url) =>{
        setIsLoading(true);
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if(data.Response === "True"){
                setIsLoading(false);

                setMovie(data.Search);
                setisError({

                    show: false,
                    msg:"",
                });
            } else {
                setisError({

                    show: true,
                    msg:data.Error,
                });
            }
        }
        catch(error){
            console,log(error);
        }
    }
    useEffect(()=>{
        // when we use a clear Timeout then we make our setTimeout is a variable
    let timerOut =  setTimeout(()=>{
            getMovies(`${API_URL}&s=${quary}`);
        }, 800);

        // cleanUp function
        return ()=> clearTimeout(timerOut);
    },[quary]);
    return( <AppContext.Provider value={{movie,isLoading,isError,quary,setQuery}}>
        {children}
    </AppContext.Provider>)
};

//global custom hook
// this is a simple way to get data shortcut
const useGlobleContext = () => {
    return useContext(AppContext);
}

export {AppContext , AppProvider , useGlobleContext};