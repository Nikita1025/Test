import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    calculator: [{
        count: {
            position: 1,
            data: {
                count: 0
            }
        },
        operationButtons: {
            position: 2,
            data: [
                {id: 1, symbol: '/'},
                {id: 2, symbol: 'x'},
                {id: 3, symbol: '-'},
                {id: 4, symbol: '+'},
            ]
        },
        numbers: {
            position: 3,
            data: [
                {id: 1, number: 9},
                {id: 2, number: 8},
                {id: 3, number: 7},
                {id: 4, number: 6},
                {id: 5, number: 5},
                {id: 6, number: 4},
                {id: 7, number: 3},
                {id: 8, number: 2},
                {id: 9, number: 1},
                {id: 10, number: ','},
                {id: 11, number: 0},

            ]
        },
        result: {
            position: 4,
            data: null
        }
    }],
    newCalculator: [{
        count: {
            position: 1,
            data: {count: null}
        },
        operationButtons: {
            position: 2,
            data: [
                {id: 1, symbol: '/'},
                {id: 2, symbol: 'x'},
                {id: 3, symbol: '-'},
                {id: 4, symbol: '+'},
            ]
        },
        numbers: {
            position: 3,
            data: [
                {id: 1, number: null},
                {id: 2, number: null},
                {id: 3, number: null},
                {id: 4, number: null},
                {id: 5, number: null},
                {id: 6, number: null},
                {id: 7, number: null},
                {id: 8, number: null},
                {id: 9, number: null},
                {id: 10, number: null},
                {id: 11, number: null},]
        },
        result: {
            position: 4,
            data: null
        }
    }]
}

const slice = createSlice({
    name: 'calculator',
    initialState: initialState,
    reducers: {
        changeCalculatorAC(state, action: any) {
            state.newCalculator = action.newElement
        },
        sortAC(state,action:any){
            state.newCalculator.map(el=>{
                if(el.operationButtons.position === action.operationButtons.position){
                    return el.operationButtons.position = action.operationButtons.position
                }
                return el
            })
        }
    }
})

export const elementsReducer = slice.reducer
export const {changeCalculatorAC, sortAC} =slice.actions



