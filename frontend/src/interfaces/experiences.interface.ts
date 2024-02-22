export interface ExperienceState {
  selectedItemIndex: number;
  showAddEditModal: boolean;
  selectedItemForEdit: any;
  showDeleteModal: boolean;
  selectedItemForDelete: any;
}

export interface ExperiencesRoot{
  experiences: ExperienceState;
}

export interface Experience{
  id: string;
  title: string;
  period: string;
  company: string;
  description: string;
}
