import React, { useCallback, useState } from "react";
import "./App.css";
import Confetti from "react-confetti";
import EarnButton from "./EarnButton.react";
import { useWindowSize } from "react-use";
import CurrentBalance from "./CurrentBalance.react";
import SelectUser from "./SelectUser.react";

enum State {
  PRESS_BUTTON = 0,
  SELECT_USER,
  CONFETTI,
  BALANCE_SHOWN,
}

function App() {
  const { width, height } = useWindowSize();
  const [currentState, setCurrentState] = useState<State>(State.PRESS_BUTTON);
  const [currentBalance, setCurrentBalance] = useState<number>(0);
  const onUpdateBalanceCallback = useCallback(
    (balance: number) => {
      setCurrentState(State.CONFETTI);
      setCurrentBalance(balance);
    },
    [setCurrentBalance, setCurrentState]
  );

  const showBalanceCallback = useCallback(
    () => setCurrentState(State.BALANCE_SHOWN),
    [setCurrentState]
  );
  const pressButtonCallback = useCallback(() => {
    setCurrentState(State.SELECT_USER);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {currentState === State.PRESS_BUTTON && (
          <EarnButton callback={pressButtonCallback} />
        )}
        {(currentState === State.SELECT_USER ||
          currentState === State.CONFETTI) && (
          <SelectUser
            onSendForm={onUpdateBalanceCallback}
            cssClass={
              currentState === State.SELECT_USER ? "fade-in" : "fade-out"
            }
          />
        )}
        {currentState === State.BALANCE_SHOWN && (
          <CurrentBalance value={currentBalance} />
        )}
      </header>
      {currentState === State.CONFETTI && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={3000}
          onConfettiComplete={showBalanceCallback}
        />
      )}
    </div>
  );
}

export default App;
