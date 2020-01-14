declare module 'MyTypes' {
  import { StateType, ActionType } from 'typesafe-actions';
  export type ReducerState = StateType<
    typeof import('../redux/todo/reducer').default
  >;
  export type RootAction = ActionType<typeof import('../redux/todo/actions')>;
}
