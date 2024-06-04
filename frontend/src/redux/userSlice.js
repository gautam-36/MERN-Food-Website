import { createSlice } from "@reduxjs/toolkit";

const initialState = {
<<<<<<< HEAD
  email: localStorage.getItem("email") || "",
  firstName: localStorage.getItem("firstName") || "",
  image: localStorage.getItem("image") || "",
  lastName: localStorage.getItem("lastName") || "",
  _id: localStorage.getItem("_id") || "",
=======
  email: "",
  firstName: "",
  image: "",
  lastName: "",
  _id: "",
>>>>>>> e6e82dc8f6524e4c16e3aa266baecb4a77dee8d7
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
<<<<<<< HEAD
      const { _id, firstName, lastName, email, image } = action.payload.data;
      state._id = _id;
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      state.image = image;

      // Save user data to localStorage
      localStorage.setItem("email", email);
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("image", image);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("_id", _id);
    },
    logoutRedux: (state) => {
=======
      console.log(action.payload.data);
      //   state.user = action.payload.data;
      state._id = action.payload.data._id;
      state.firstName = action.payload.data.firstName;
      state.lastName = action.payload.data.lastName;
      state.email = action.payload.data.email;
      state.image = action.payload.data.image;
    },
    logoutRedux: (state, action) => {
>>>>>>> e6e82dc8f6524e4c16e3aa266baecb4a77dee8d7
      state._id = "";
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.image = "";
<<<<<<< HEAD

      // Remove user data from localStorage
      localStorage.removeItem("email");
      localStorage.removeItem("firstName");
      localStorage.removeItem("image");
      localStorage.removeItem("lastName");
      localStorage.removeItem("_id");
=======
>>>>>>> e6e82dc8f6524e4c16e3aa266baecb4a77dee8d7
    },
  },
});

<<<<<<< HEAD
export const { loginRedux, logoutRedux } = userSlice.actions;
=======
export const { loginRedux ,logoutRedux} = userSlice.actions;
>>>>>>> e6e82dc8f6524e4c16e3aa266baecb4a77dee8d7

export default userSlice.reducer;
