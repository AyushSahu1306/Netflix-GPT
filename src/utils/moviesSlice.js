import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null, 
        popularMovies:null,
        trailerVideo:null,
        topRated:null,
        upcomingMovies:null,
        tvShows:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addTopRated:(state,action)=>{
            state.topRated=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload;
        },
        addTvShows:(state,action)=>{
            state.tvShows=action.payload;
        },
    }
})

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRated,addUpcomingMovies,addTvShows}=moviesSlice.actions;

export default moviesSlice.reducer;