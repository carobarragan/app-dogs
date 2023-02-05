const INITIAL_STATE = {
  dogs: [],
  allDogs: [],
};

export default function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_DOG":
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
