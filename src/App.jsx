import { useState } from 'react'
import './App.css'

  function szyfruj(znak, przesuniecie) { 
  
  const alfabet = "ABCDEFGHIJKLMNOPQRSTUWVXYZ";
    
  const pozycja = alfabet.indexOf(znak);

    if (pozycja === -1) {
    return znak;
  }

  const wynik = (pozycja + przesuniecie) % alfabet.length;

  return alfabet[wynik];
  } 

function App() {
  const [tekst, setTekst] = useState('PIEROGI');
  const [przesuniecie, setPrzesuniecie] = useState(3);

  const zaszyfrowanyTekst = tekst.split('').map((znak) => szyfruj(znak, przesuniecie)).join('');
    return (
    <>
        <input type="text" placeholder='Wpisz tekst' value={tekst} onChange={(e) => setTekst(e.target.value)} />
        <input type="range" min="1" max="25" value={przesuniecie} onChange={(e) => setPrzesuniecie(Number(e.target.value))} />
        <button onClick={() => szyfruj(tekst, przesuniecie)}>Szyfruj</button>
        <p>Zaszyfrowany tekst: {zaszyfrowanyTekst}</p>
    </>
  )
}

export default App
