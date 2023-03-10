
const initialState={
    count: 0,
    operationButtons:[
        {id:1, symbol: '/'},
        {id:2, symbol: 'x'},
        {id:3, symbol: '-'},
        {id:4, symbol: '+'},
    ],
    numbers:[
        {id:1, number: 9},
        {id:2, number: 8},
        {id:3, number: 7},
        {id:4, number: 6},
        {id:5, number: 5},
        {id:6, number: 4},
        {id:7, number: 3},
        {id:8, number: 2},
        {id:9, number: 1},
        {id:10, number: ','},
        {id:11, number: 0},
    ]
}

type initialStateType= typeof initialState

export const elementsReducer=(state=initialState, action:any):initialStateType=>{
    switch (action.type){
    }
    return state
}