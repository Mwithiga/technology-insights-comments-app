import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, title: "Learn Redux", content: "You have made the right decision to make this step. Redux will help you sought out the challenge of managing the state of your application" },
    { id: 2, title: "Essential Redux Tools", content: "In order to leverage the power of redux, there is need to learn about the various tools that have been created to smoothen the process of ustilizing redux. Some of teh recommended tools include redux toolkit, and reducx extension" }
]

const commentsSlice = createSlice(

    {
        name: "posts",
        initialState,
        reducers: {
            commentAdded(state, action) {
                state.push(action.payload)
            }
        }
    }
)

export const { commentAdded } = commentsSlice.actions;

export default commentsSlice.reducer;
