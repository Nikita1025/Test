import React, {useState} from 'react';
import {ReactComponent as Eye} from '../../assets/icon/eye.svg';
import {ReactComponent as Selector} from '../../assets/icon/selector.svg';
import style from './ConstructorCalculator.module.css'
import {useAppSelector} from "../../store/store";

export const ConstructorCalculator = () => {
    const [pageType, setPageType] = useState<'runtime' | 'constructor'>('constructor')
    const state=useAppSelector(state => state.calculator.newCalculator)
    const selectPage = (page: 'runtime' | 'constructor') => {
        setPageType(page)
    }
    return (
        <div className={style.container}>
            <div className={style.button_box}>
                <button className={pageType === 'runtime' ? style.button_active : style.button}
                        onClick={() => selectPage('runtime')}>
                    <Eye className={pageType === 'runtime'
                        ? style.active_page
                        : style.inactive_page
                    }/>
                    <p className={style.text}>Runtime</p>
                </button>
                <button className={pageType === 'constructor' ? style.button_active : style.button}
                        onClick={() => selectPage('constructor')}>
                    <Selector className={pageType === 'constructor'
                        ? style.active_page
                        : style.inactive_page
                    }/>
                    <p className={style.text}>Constructor</p>
                </button>
            </div>
            <div className={style.field_constructor}>
                        {Array.isArray(state)
                        ? state.map((el,index) => {
                                return <div key={index}>{el.operationButtons.position}</div>;
                        })
                        : null}
            </div>
        </div>
    );
};

