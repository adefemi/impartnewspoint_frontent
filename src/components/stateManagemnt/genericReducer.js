import { Textaction, CommentTriggerAction } from "./actions";

export const textState = {
  textValue: 2,
};

export const commentTriggerState = {
  commentTrigger: true,
};

export const textReducer = (state, action) => {
  if (action.type === Textaction) {
    return {
      ...state,
      textValue: action.payload,
    };
  }
  return state;
};

export const commentTriggerReducer = (state, action) => {
  if (action.type === CommentTriggerAction) {
    return {
      ...state,
      commentTrigger: action.payload,
    };
  }
  return state;
};
