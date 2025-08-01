import { useState } from "react"

export default function Player({initialName, symbol, isActive}){
    const[playerName, setPlayerName]=useState(initialName);
    const [isEditing, setIsEditing]= useState(false);

    function handelEditClick(){
        setIsEditing((editing)=> !editing);
    }

    function handelChange(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    // let btnCaption = "Edit"

    if(isEditing){
        editablePlayerName = <input type="text" required value={playerName} onChange = {handelChange} />;
        // btnCaption="Save";
    }

    return  (<li className={ isActive ? 'active': undefined}>
    <span className="player">
        {editablePlayerName}
    <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={handelEditClick}>{isEditing? 'Save': 'Edit'}</button>
  </li>)
}