const initialState = {
    tasks:[]
}


const TaskReducer = (state = initialState, action:any) => {
  switch(action.type){
    case 'ADD_TASK' :
        return{
            ...state,
            tasks: [...state.tasks, action.payload]
        };
        
    case 'DELETE_TASK' :
        return{
            ...state,
            tasks: state.tasks.filter((task:any) => task.id !== action.payload)
        };
    case 'EDIT_TASK' :
        // eslint-disable-next-line no-case-declarations
        const data: any = [...state.tasks];
        // eslint-disable-next-line no-case-declarations
        const index = data.findIndex((task : any)=> task.id === action.payload.id)
        data[index].text = action.payload.updatedText;
        console.log('data', data, index)
        return{
            ...state,
            tasks: data
        }
        
    default:
        return state;
  }
};

export default TaskReducer;
