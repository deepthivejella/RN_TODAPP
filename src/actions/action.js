import types from '../types'

const addItemToNotes = (data) => ({
    type: types.ADD_ITEM,
    payload: data
  });

export default {
    addItemToNotes
}