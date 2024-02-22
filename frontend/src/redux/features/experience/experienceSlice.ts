import {createSlice, PayloadAction,} from "@reduxjs/toolkit";
import {ExperienceState} from "../../../interfaces/experiences.interface";

const initialState: ExperienceState= {
  selectedItemIndex: 0,
  showAddEditModal: false,
  selectedItemForEdit: null,
  showDeleteModal:false,
  selectedItemForDelete: null
};

const experienceSlice = createSlice({
  name:'experiences',
  initialState,
  reducers:{
    setSelectedItemIndex:(state,action:PayloadAction<number>) =>{
      state.selectedItemIndex = action.payload;
    },
    setShowAddEditModal:(state,action:PayloadAction<boolean>) =>{
      state.showAddEditModal = action.payload;
    },
    setSelectedItemForEdit:(state,action:PayloadAction<any>) =>{
      state.selectedItemForEdit = action.payload;
    },
    setShowDeleteModal:(state,action:PayloadAction<boolean>) =>{
      state.showDeleteModal = action.payload;
    },
    setSelectedItemForDelete:(state,action:PayloadAction<any>) =>{
      state.selectedItemForDelete = action.payload;
    },
  }
})

export const {setSelectedItemIndex,setShowAddEditModal,setSelectedItemForEdit,setShowDeleteModal,setSelectedItemForDelete} = experienceSlice.actions;

export default experienceSlice.reducer;
