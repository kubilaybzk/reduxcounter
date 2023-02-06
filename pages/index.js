import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from "../src/counterslice";
import  {changeTheme,Theme} from '../src/ThemeSlice';
import { changeName,changeAll,changeLanguage,LanguageSelect} from '../src/LanguangeSlice';
import styles from "../styles/Counter.module.css";

export default function Counter() {
  const count = useSelector(selectCount);
  const Themess =useSelector(Theme);
  const Language =useSelector(LanguageSelect);
  console.log(Language);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
   <>
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
    
          <div>
              <button onClick={()=>dispatch(changeTheme())}>Değiştir</button>
              {Themess?<div>True</div>:<div>False</div>}
          </div>

          <div >
          <button onClick={()=>dispatch(changeName('Test'))}>İsmi Değiştir</button>
          <button onClick={()=>dispatch(changeLanguage('Eng'))}>İsmi Değiştir</button>
          <button onClick={()=>dispatch(changeAll({Lang:"FR",Name:"Kubilay"}))}>İsmi Değiştir</button>
              <div> Name:{Language.Name} </div>
              <div> Language:{Language.Language} </div>
          </div>
    </>
  );
}
