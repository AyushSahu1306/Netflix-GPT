import { createSlice } from "@reduxjs/toolkit";

const GPTSlice= createSlice({
    name:'GPT',
    initialState:{
        showGPTSearch:false,
        movieNames:null,
        movieResults:null,
    },
    reducers:{
        toggleGPTSearchView:(state,action)=>{
            state.showGPTSearch= !state.showGPTSearch;
        },
        addGPTMovieResult:(state,action)=>{
            const{movieNames,movieResults}= action.payload;
            state.movieNames=movieNames;
            state.movieResults=movieResults;
        }
    }
})

export const {toggleGPTSearchView,addGPTMovieResult}=GPTSlice.actions;

export default GPTSlice.reducer;