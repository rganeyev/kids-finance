import React, { useCallback, useState } from 'react';
import './App.css';
import Confetti from 'react-confetti';
import InputForm from './InputForm.react';
import { useWindowSize } from 'react-use';
import CurrentBalance from './CurrentBalance.react';

function App() {
  const { width, height } = useWindowSize();
  const [isButtonPressed, setButtonPressed] = useState(false);
  const [currentBalance, setCurrentBalance] = useState(0);
  const [balanceShown, setBalanceShown] = useState(false);
  const onUpdateBalance = useCallback((balance: number, isUpdated: boolean) => {
    setButtonPressed(true);
    setCurrentBalance(balance);
  }, []);


  return (
    <div className="App">
      {isButtonPressed && <Confetti
        width={width}
        height={height}
        recycle={false}
        numberOfPieces={3000}
        onConfettiComplete={() => setBalanceShown(true)}
      />}
      <header className="App-header">
        <InputForm className={isButtonPressed ? 'fadeOut' : 'fadeIn'} onSendForm={onUpdateBalance} />
        {balanceShown && <CurrentBalance value={currentBalance} />}
      </header>
    </div>
  );
}

export default App;
