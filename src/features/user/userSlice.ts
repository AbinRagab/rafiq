import { createSlice } from "@reduxjs/toolkit";

export type User = {
    id?:string,
    name?:string,
    email?:string,
    job_title?:string;
}

type UserState = {
    user: User | null;
    loading: boolean;
    error: string | null;
  };
  
  const initialState: UserState = {
    user: null,
    loading: false,
    error: null,
  };  

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{

    }
})


export default userSlice.reducer;