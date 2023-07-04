import React from 'react'


export const addTask = (task: string) => {
  return{
    type: 'ADD_TASK',
    payload: {
        id: new Date().getTime(),
        text: task,
        completed: false
    }
  }
}

export const deleteTask = (id:any) => {
    return{
        type: 'DELETE_TASK',
        payload: id
    }
}

export const editTask = (id:any, updatedText:string) => {
  return{
    type: 'EDIT_TASK',
    payload: {
      id: id,
      updatedText: updatedText
    }
  }
}

