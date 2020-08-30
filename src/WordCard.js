import React from "react";
import CharacterCard from "./CharacterCard";

export default function Wordcard(props) {
    return(
        <div>
            {
                Array.from(props.value).map((a, i) =>  <CharacterCard value={a} key={i}/>)
            }
        </div>
    )
}