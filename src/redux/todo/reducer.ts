import * as MyTypes from 'MyTypes';
import { actionTypes } from './actions';

interface TodoListModel {
  id: number;
  todo: string;
}

interface TodoModel {
  count: number;
  list: TodoListModel[];
}

export const initialState: TodoModel = {
  count: 2,
  list: [
    { todo: 'do smth 1', id: 1 },
    { todo: 'do smth 2', id: 2 }
  ]
};

export const todoReducer = (
  state: TodoModel = initialState,
  action: MyTypes.RootAction
) => {
  const type = action.type;
  const payload = action.payload;
  switch (type) {
    case actionTypes.ADD_TODO:
      const newTodo = {
        title: payload,
        id: state.count += 1
      };
      return {
        ...state,
        count: state.count + 1,
        list: [...state.list, newTodo]
      };

    case actionTypes.DELETE_TODO:
      const oldlist = [...state.list];
      const newList = oldlist.filter(todo => todo.id !== payload);

      return { ...state, count: state.count - 1, list: newList };
    default:
      return state;
  }
};
