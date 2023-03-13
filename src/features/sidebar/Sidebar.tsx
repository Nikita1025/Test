import React, { DragEvent, useState } from 'react';

import classNames from 'classnames';

import { ReactComponent as Eye } from '../../assets/icon/eye.svg';
import { ReactComponent as Image } from '../../assets/icon/image.svg';
import { ReactComponent as Selector } from '../../assets/icon/selector.svg';
import { Calc, CalcBlock, setCalcBlock } from '../../store/reducers/elementsReducer';
import { useAppDispatch, useAppSelector } from '../../store/store';

import style from './Sidebar.module.css';

export const Sidebar = (): JSX.Element => {
  const { calculators } = useAppSelector(state => state.calculator);
  const dispatch = useAppDispatch();

  const [currentCalc, setCurrentCalc] = useState<Calc | null>(null);
  const [currentElement, setCurrentElement] = useState<CalcBlock | null>(null);
  const [pageType, setPageType] = useState<'runtime' | 'constructor'>('constructor');
  const [finalCalc, setFinalCalc] = useState(false);

  const handleDragStart = (
    e: DragEvent<HTMLDivElement>,
    calc: Calc,
    element: CalcBlock,
  ): void => {
    setCurrentCalc(calc);
    setCurrentElement(element);
    e.currentTarget.style.opacity = '0.5';
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.currentTarget.style.background = 'white';
  };
  const handleDragOverConstructor = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.currentTarget.style.background = 'rgba(112,165,238,0.3)';
  };
  const handleDrop = (
    e: DragEvent<HTMLDivElement>,
    calc: Calc,
    element?: CalcBlock,
  ): void => {
    e.preventDefault();
    const currentIndex = currentCalc?.data.indexOf(currentElement!);

    const dropIndex = calc.data.indexOf(element!);
    const copyCalc = calc?.data && { ...calc, data: [...calc.data] };

    copyCalc?.data.splice(currentIndex!, 1);
    copyCalc?.data.splice(dropIndex, 0, currentElement!);

    const newCalc = calculators.map(c => {
      if (c.id === calc.id) {
        return copyCalc;
      }

      return c;
    });

    dispatch(setCalcBlock(newCalc));
    e.currentTarget.style.opacity = '1';
  };
  const selectPage = (page: 'runtime' | 'constructor'): void => {
    setPageType(page);
    setFinalCalc(!finalCalc);
  };

  return (
    <div className={style.container}>
      {calculators.map(block => (
        <div
          key={block.id}
          onDragOver={e => handleDragOver(e)}
          onDrop={e => handleDrop(e, block)}
          className={style.calculator}
        >
          {block.data.length === 0 ? (
            <div
              onDragOver={e => handleDragOverConstructor(e)}
              className={style.field_constructor}
            >
              <Image />
              <div className={style.text_box}>
                <p className={style.title_constructor}>Перетащите сюда</p>
                <span className={style.text_constructor}>
                  любой элемен
                  <br /> из левой панели
                </span>
              </div>
            </div>
          ) : (
            block.data &&
            block.data.map(item => {
              return (
                <div
                  key={block.id + item.label + '_calc'}
                  onDragStart={e => handleDragStart(e, block, item)}
                  onDrop={e => handleDrop(e, block, item)}
                  draggable={true}
                  className={classNames(style.border_box, {
                    [style.numbers_box]: item.label === 'numbers',
                  })}
                >
                  {pageType === 'runtime' &&
                    item.data.map(element => {
                      return item.label === 'count' ? (
                        <div className={style.count_box} key={element.id + '_block'}>
                          <p className={style.count}>{element.value}</p>
                        </div>
                      ) : (
                        <button
                          key={element.id + '_block'}
                          className={classNames({
                            [style.button_symbols]: item.label === 'operationButtons',
                            [style.button_number]:
                              item.label === 'numbers' && element.id !== 11,
                            [style.button_null]: element.id === 11,
                            [style.button_result]: item.label === 'result',
                          })}
                        >
                          {element.value}
                        </button>
                      );
                    })}
                </div>
              );
            })
          )}
        </div>
      ))}
      <div className={style.button_box}>
        <button
          className={pageType === 'runtime' ? style.button_active : style.button}
          onClick={() => selectPage('runtime')}
        >
          <Eye
            className={pageType === 'runtime' ? style.active_page : style.inactive_page}
          />
          <p className={style.text}>Runtime</p>
        </button>
        <button
          className={pageType === 'constructor' ? style.button_active : style.button}
          onClick={() => selectPage('constructor')}
        >
          <Selector
            className={
              pageType === 'constructor' ? style.active_page : style.inactive_page
            }
          />
          <p className={style.text}>Constructor</p>
        </button>
      </div>
    </div>
  );
};
