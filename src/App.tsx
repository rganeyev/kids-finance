import React, { useCallback, useState } from 'react';
import './App.css';
import Confetti from 'react-confetti';
import InputForm from './InputForm.react';
import { useWindowSize } from 'react-use';
import CurrentBalance from './CurrentBalance.react';
import SelectUser from './SelectUser.react';

enum State {
  SELECT_USER = 0,
  PRESS_BUTTON = 1,
  CONFETTI,
  BALANCE_SHOWN,
}

function App() {
  const { width, height } = useWindowSize();
  const [currentState, setCurrentState] = useState<State>(State.SELECT_USER);
  const [userName, setUserName] = useState<string | null>(null);
  const [currentBalance, setCurrentBalance] = useState<number>(0);
  const onUpdateBalance = useCallback((balance: number) => {
    setCurrentState(State.CONFETTI);
    setCurrentBalance(balance);
  }, [setCurrentBalance, setCurrentState]);

  const showBalanceCallback = useCallback(() => setCurrentState(State.BALANCE_SHOWN), [setCurrentState]);
  const selectUserNameCallback = useCallback((name: string) => { setUserName(name); setCurrentState(State.PRESS_BUTTON); }, [setUserName]);


  return (
    <div className="App">
      <header className="App-header">{currentState === State.SELECT_USER && <SelectUser onSelectUser={selectUserNameCallback} />}
        {(currentState === State.PRESS_BUTTON || currentState === State.CONFETTI) &&
          <InputForm className={currentState === State.CONFETTI ? 'fadeOut' : 'fadeIn'} onSendForm={onUpdateBalance} userName={userName!} />
        }
        {currentState === State.BALANCE_SHOWN && <CurrentBalance value={currentBalance} />}
      </header>
      {currentState === State.CONFETTI && <Confetti
        width={width}
        height={height}
        recycle={false}
        numberOfPieces={3000}
        onConfettiComplete={showBalanceCallback}
      />}
    </div>
  );
}

export default App;
