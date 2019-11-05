export const ADD_TEXT = 'ADD_TEXT';
export const REMOVE_TEXT = 'REMOVE_TEXT';
export const EDIT_TEXT = 'EDIT_TEXT';
export const UPDATE_TEXT = 'UPDATE_TEXT';


export function addText(content) {
  return { type: ADD_TEXT, content: content };
  // you can api calls to update backend 
}

export function removeText(id) {
  return { type: REMOVE_TEXT, id: id };
}

export function editText(content, id) {
  return { type: EDIT_TEXT, content: content, id: id };
}

export function updateText(content, id) {
  return { type: UPDATE_TEXT, content: content, id: id };
}