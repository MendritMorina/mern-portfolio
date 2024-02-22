export interface ProjectState {
  selectedItemIndex: number;
  showAddEditModal: boolean;
  selectedItemForEdit: any;
  showDeleteModal: boolean;
  selectedItemForDelete: any;
}

export interface ProjectRoot{
  projects: ProjectState;
}

export interface Project{
  id: string;
  title: string;
  period: string;
  description: string;
  content: string;
  link: string;
  personal: boolean;
  technologies: string[]
}
