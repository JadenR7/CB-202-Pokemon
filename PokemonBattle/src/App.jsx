import React, { useState, useEffect } from "react";
import './App.css'



function App() {
  const [battleLog, setBattleLog] = useState([]);

  const myPokemon = { name: "Pikachu", type: "Electric", hp: 100, level: 12 };
  const opponentPokemon = { name: "Charmander", type: "Fire", hp: 100, level: 10 };

  const attacks = ["Thunderbolt", "Quick Attack", "Iron Tail", "Electro Ball"];
  const opponentAttacks = ["Scratch", "Ember", "Growl", "Bite"];

  function randomNumGenerator() {
    return Math.floor(Math.random() * 4);
  }

  function attackDetails(pokemonName, moves) {
    const attackIndex = randomNumGenerator();
    const attackUsed = moves[attackIndex];
    const damage = Math.floor(Math.random() * 100) + 1;
    return `${pokemonName} used ${attackUsed}! It did ${damage} damage!`;
  }

  useEffect(() => {
    const logs = [];
    logs.push("Battle Start!");
    logs.push(attackDetails(myPokemon.name, attacks));
    logs.push(attackDetails(opponentPokemon.name, opponentAttacks));
    setBattleLog(logs);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Pokémon Battle</h1>
      {battleLog.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
}

export default App
