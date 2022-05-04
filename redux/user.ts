import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from '@reduxjs/toolkit';


interface UserData {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}


export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('https://reqres.in/api/users?delay=1');
  return (await response.json()).data as UserData[];
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [] as UserData[],
    loading: false,
    name: ''
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload
      state.loading = false
      state.name = 'Thien'
    })
    builder.addCase(fetchUsers.rejected, state => {
      state.loading = false
    })
  }
})

export default usersSlice.reducer