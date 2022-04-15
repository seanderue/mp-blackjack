import React from "react"

export default function Blackjack(props)
{
    return(
        <div>
            <h1>Blackjack</h1>
            <p id="message-el">Want to play a round?</p>
            <p id="cards-el">Cards:</p>
            <p id="sum-el">Sum:</p>
            <button onClick="startGame()">START GAME</button>
            <button onClick="newCard()">NEW CARD</button>
            <p id="player-el"></p>
        </div>
        )
}