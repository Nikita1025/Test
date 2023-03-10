import React, {useState} from 'react';
import {useAppSelector} from "../../store/store";
import style from './Sidebar.module.css'
export const Sidebar = () => {
    const {numbers, operationButtons, count}=useAppSelector(state => state.calculator)
    const [pageType, setPageType]=useState<'Runtime'|'constructor'>('constructor')
    return (
        <div className={style.container}>
            <div className={style.border_box}>
                <div className={style.count_box}>
                    <p className={style.count}>{count}</p>
                </div>
            </div>
            <div className={style.border_box}>
                    {operationButtons.map(el=>
                        <button className={style.button_symbols}>
                            {el.symbol}
                        </button>
                    )}
            </div>
            <div className={style.border_box}>
                <div className={style.numbers_box}>
                    {numbers.map(el=>
                        <button className={el.id ===11? style.button_null:style.button_number}>
                            {el.number}
                        </button>
                    )}
                </div>
            </div>
            <div className={style.border_box}>
                <button className={style.button_result}>
                    =
                </button>
            </div>


        </div>
    );
};

