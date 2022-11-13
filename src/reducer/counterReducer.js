const initialData ={
    count : 1000
}

export const counterReducer = (state=initialData, action) => {
// const counterReducer = (state=initialData, action) => {
    switch(action.type){
        case "ADD_COUNT":
            return {count: ++state.count}

        case "REDUCE_COUNT":
            return {count: --state.count}

        case "RESET_COUNT":
            return {count: 0}

        default:
            return state
    }
}

// export default counterReducer