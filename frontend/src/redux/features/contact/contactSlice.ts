import {createSlice, PayloadAction,} from "@reduxjs/toolkit";
import {ContactState} from "../../../interfaces/contacts.interface";

const initialState: ContactState= {
  showDeleteModal:false,
  selectedItemForDelete: null
};

const experienceSlice = createSlice({
  name:'contacts',
  initialState,
  reducers:{
    setShowDeleteModal:(state,action:PayloadAction<boolean>) =>{
      state.showDeleteModal = action.payload;
    },
    setSelectedItemForDelete:(state,action:PayloadAction<any>) =>{
      state.selectedItemForDelete = action.payload;
    },
  }
})

export const {setShowDeleteModal,setSelectedItemForDelete} = experienceSlice.actions;

export default experienceSlice.reducer;
