
const initialState={
    count: 0,
    operationButtons:[
        {id:1, symbol: '/'},
        {id:2, symbol: 'x'},
        {id:3, symbol: '-'},
        {id:4, symbol: '+'},
    ],
    numbers:[
        {id:1, value: 9},
        {id:2, value: 8},
        {id:3, value: 7},
        {id:4, value: 6},
        {id:5, value: 5},
        {id:6, value: 4},
        {id:7, value: 3},
        {id:8, value: 2},
        {id:9, value: 1},
        {id:10, value: ','},
        {id:11, value: 0},
    ]
}

type initialStateType= typeof initialState

export const elementsReducer=(state=initialState, action:any):initialStateType=>{
    switch (action.type){
    }
    return state
}