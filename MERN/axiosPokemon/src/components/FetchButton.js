import React,{useState,useEffect,useRef} from "react";
import axios from "axios";

const FetchButton=props=>{
    const{pokemon,setPokemon}=props;
    const useDidMountEffect = (func, deps) => {
        const didMount = useRef(false);
    
        useEffect(() => {
            if (didMount.current) func();
            else didMount.current = true;
        }, deps);
    }
    const [clicked, setClicked] = useState(false)

    useDidMountEffect( ()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807").then(response=>{
            let results = response.data.results.map( p => p.name)
            setPokemon(results)
        }).catch(err=>{console.log(err)})
    }, [clicked] )

    const onClick = e => {
        clicked?
        setClicked(false):
        setClicked(true)
    }
    return(
        <div >
        <button onClick={ onClick } type="button">Fetch</button>
        </div>
    )

}
export default FetchButton;