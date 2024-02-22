export interface ContactState {
  showDeleteModal: boolean;
  selectedItemForDelete: any;
}

export interface ContactRoot{
  projects: ContactState;
}

export interface Contact{
  id: string;
  name: string;
  lastName: string;
  email: string;
  message: string;
}
