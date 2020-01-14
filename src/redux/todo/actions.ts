import { action } from 'typesafe-actions';

// TODO: read about enum
export enum actionTypes {
  ADD_TODO = 'todo/ADD_TODO',
  DELETE_TODO = 'todo/DELETE_TODO'
}

export const todoActions = {
  add: (item: string) => action(actionTypes.ADD_TODO, item),
  delete: (id: number) => action(actionTypes.DELETE_TODO, id)
};
