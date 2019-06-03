import state from "./state"
const reducer = (prevState=state,action)=>{
    let newDate = JSON.parse(JSON.stringify(prevState))
    switch(action.type){
        case "CHANGE_NAV":
        newDate.bread = action.bread
        break;
        default:
        break;
    }
    return newDate
}
export default reducer