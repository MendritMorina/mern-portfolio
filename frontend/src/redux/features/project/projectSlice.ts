import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
  selectedItemIndex: 0,
  showAddEditModal: false,
  selectedItemForEdit: null,
  showDeleteModal:false,
  selectedItemForDelete: null
};

const projectSlice = createSlice({
  name:'projects',
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

export const {setSelectedItemIndex,setSelectedItemForEdit,setSelectedItemForDelete,setShowDeleteModal,setShowAddEditModal} = projectSlice.actions;

export default projectSlice.reducer;
