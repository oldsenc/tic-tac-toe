// This file acts like a base file containing the info and Board components.

import Board from "./Board";
import Info from "./Info";
import "./css/app.css";
import { useState } from "react";

function App() {
    // Creacting a reset state, which indicates wheather the game should be reset or not
    const[reset, setReset] = useState(false);
    // Creating a winner state, which indicates the current winner
    const [winner, setWinner] = useState('');
    // Set the reset property to true which starts the chain reaction of resetting the board
    const resetBoard = () =>{
        setReset(true);
    }
    return (
        <div className="App">
            {/* Shirnks the popup when there is no winner */}
            <div className={`winner ${winner !== ''?'' : 'shrink'}`}>
                {/* Display the current winner */}
                <div className="winner-text">{winner}</div>
                {/* Button use to reset the board */}
                <button onClick={(e) => resetBoard()}>
                    Reset Board 
                </button>
            </div>
            {/* Custom made board component comprising of the tic-tac-toe board */}
            <Board reset={ reset } setReset={ setReset } winner={ winner } setWinner={ setWinner } />
            <Info />
        </div>
    )
}

export default App;