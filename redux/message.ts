import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const messageSlice = createSlice({
  name: "message",
  initialState: {
    message: "Initial message"
  },
  reducers: {
    setMessage(state, action: PayloadAction<string>) {
      state.message =`${action.payload} :   thien nguyen ne`
    }
  }
})

export const { setMessage } = messageSlice.actions
export default messageSlice.reducer