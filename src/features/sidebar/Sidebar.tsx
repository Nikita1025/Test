import React, {DragEvent} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/store";
import style from './Sidebar.module.css'
import {changeCalculatorAC, sortAC} from "../../store/reducers/elementsReducer";

export const Sidebar = () => {
    const cal = useAppSelector(state => state.calculator.calculator)
    const dispatch=useAppDispatch()
    const dragStartHandler=(e:DragEvent<HTMLDivElement>, ojb:any)=>{
        dispatch(changeCalculatorAC(ojb))
        console.log('dragStart',ojb)
    }
    const dragLeaveHandler=(e:DragEvent<HTMLDivElement>)=>{
        console.log('dragLeaveHandler')

    }
    const dragEndHandler=(e:DragEvent<HTMLDivElement>)=>{
        console.log('dragEndHandler')

    }
    const dragOverHandler=(e:DragEvent<HTMLDivElement>)=>{
        e.preventDefault()
        console.log('dragOverHandler')

    }
    const dropHandler=(e:DragEvent<HTMLDivElement>, obj:any)=>{
        e.preventDefault()
        dispatch(sortAC(obj))
        console.log('dropHandler', obj)
    }
    const sortElement=(a:any, b:any)=>{
        if(a>b){
            return 1
        }else {
            return -1
        }
    }

    return (
        <div className={style.container}>
            {cal.sort(sortElement).map((obj,index) =>
                <div key={index}>
                    <div
                        onDragStart={(e) => dragStartHandler(e, obj)}
                        onDragLeave={(e) => dragLeaveHandler(e)}
                        onDragEnd={(e) => dragEndHandler(e)}
                        onDragOver={(e) => dragOverHandler(e)}
                        onDrop={(e) => dropHandler(e, index)}
                        draggable={true} className={style.border_box}>
                        <div className={style.count_box}>
                            <p className={style.count}>{obj.count.data.count}</p>
                        </div>
                    </div>
                    <div
                        onDragStart={(e) => dragStartHandler(e, obj)}
                        onDragLeave={(e) => dragLeaveHandler(e)}
                        onDragEnd={(e) => dragEndHandler(e)}
                        onDragOver={(e) => dragOverHandler(e)}
                        onDrop={(e) => dropHandler(e, index)}
                        draggable={true}
                        className={style.border_box}>
                        {obj.operationButtons.data.map(el =>
                            <button key={el.id} className={style.button_symbols}>
                                {el.symbol}
                            </button>
                        )}
                    </div>
                    <div
                        onDragStart={(e) => dragStartHandler(e, obj)}
                        onDragLeave={(e) => dragLeaveHandler(e)}
                        onDragEnd={(e) => dragEndHandler(e)}
                        onDragOver={(e) => dragOverHandler(e)}
                        onDrop={(e) => dropHandler(e, index)}
                        draggable={true} className={style.border_box}>
                        <div className={style.numbers_box}>
                            {obj.numbers.data.map(el =>
                                <button key={el.id} className={el.id === 11 ? style.button_null : style.button_number}>
                                    {el.number}
                                </button>
                            )}
                        </div>
                    </div>
                    <div
                        onDragStart={(e) => dragStartHandler(e, obj)}
                        onDragLeave={(e) => dragLeaveHandler(e)}
                        onDragEnd={(e) => dragEndHandler(e)}
                        onDragOver={(e) => dragOverHandler(e)}
                        onDrop={(e) => dropHandler(e, index)}
                        draggable={true} className={style.border_box}>
                        <button className={style.button_result}>
                            =
                        </button>
                    </div>
                </div>
            )}


        </div>
    );
};

