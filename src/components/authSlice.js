import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "./api";
const initialState = {
    token: localStorage.getItem("token"),
    name: "",
    emai: "",
    _id: "",
    registerStatus: "",
    registerError: "",
    loginStatus: "",
    loginError: "",
    userLoaded: false
}

export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (values, {rejectWithValue}) => {
        try {
            const token = await axios.post(`${url}/register`, {
                name: values.name,
                email: values.email,
                password: values.password
            })
            localStorage.setItem("token", token.data)
            return token.data
        }
        catch (err) {
            console.log(err)
            return rejectWithValue() 
        }
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(registerStatus.pending, (state,action) => {
            
        })
    }
})

export default authSlice.reducer