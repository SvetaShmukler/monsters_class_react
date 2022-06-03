
function reducer(state= { seconds: Number,}, action){
    switch(action.type){
    case "refresh":
    return({...state, seconds : action.payload})
    }

}
export default reducer