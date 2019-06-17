import {ADD_TODO} from '../Actions/Todos'
import {ADD_GOAL} from '../Actions/Goals'



const checker = (store) => (next) => (action) => {
	if(
		action.type === ADD_TODO &&
		action.todo.name.toLowerCase().includes('bitcoin')
		){
		return alert('Nope, thats a bad idea')
}
if(
	action.type === ADD_GOAL &&
	action.goal.name.toLowerCase().includes('bitcoin')
	){
	return alert('Nope, thats a bad idea')
}	
return next(action)
}

export default checker