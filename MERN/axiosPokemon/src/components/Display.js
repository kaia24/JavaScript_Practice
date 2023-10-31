import React from "react"


const Display = props => {
    const { pokemon } = props
    console.log(pokemon)
    return(
        <div>
            {    
                pokemon.map( (name, i)=> (
                    <p key={ i }>{ name }</p>
                ))
            }
        </div>
    )

}

export default Display