
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

export default function Header() {

    const count = useSelector(selectCount);
    const Themess =useSelector(Theme);
    const Language =useSelector(LanguageSelect);
    console.log(Language);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState("2");


  return (
    <div className='Header'>
      <div>
        <button onClick={() => dispatch(changeTheme())}>Değiştir</button>
        {Themess ? <div>True</div> : <div>False</div>}
      </div>

      <div>
        <button onClick={() => dispatch(changeName("Test"))}>
          İsmi Değiştir
        </button>
        <button onClick={() => dispatch(changeLanguage("Eng"))}>
          İsmi Değiştir
        </button>
        <button
          onClick={() => dispatch(changeAll({ Lang: "FR", Name: "Kubilay" }))}
        >
          İsmi Değiştir
        </button>
        <div> Name:{Language.Name} </div>
        <div> Language:{Language.Language} </div>
      </div>
    </div>
  );
}
