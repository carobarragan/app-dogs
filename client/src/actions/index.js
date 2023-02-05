import axios from "axios";

export default function getDog() {
  return async function (dispatch) {
    var json = await axios("http://localhost:3001/dog");
    console.log("json", json);
    return dispatch({
      type: "GET_DOG",
      payload: json.data,
    });
  };
}
