import API from 'goals-todos-api'

export const RECEIVE_DATA ='RECEIVE_DATA';

//ACTION CREATOR 



function receiveData(todos,goals){
	return{
		type:RECEIVE_DATA,
		todos,
		goals
	}
}

//ASYNCHRONOUS  ACTION CREATOR 

export function handleInitialData(){
    return (dispatch)=>{
    return 	Promise.all([
            API.fetchTodos(),
            API.fetchGoals()
            ]).then(([todos,goals]) => {
            dispatch(receiveData(todos,goals))
            })
        }
    }