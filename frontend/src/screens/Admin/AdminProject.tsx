import {Form, message, Modal, Select, Switch} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {
  setSelectedItemForDelete,
  setSelectedItemForEdit,
  setShowAddEditModal,
  setShowDeleteModal
} from "../../redux/features/project/projectSlice";
import {
  useCreateProjectMutation, useDeleteProjectMutation,
  useGetAllProjectsQuery,
  useUpdateProjectMutation
} from "../../redux/api/projectApiSlice";
import {Project, ProjectRoot} from "../../interfaces/projects.interface";


const AdminProject = () => {
  //antd
  const [form] = Form.useForm();

  // State management local
  const showAddEditModal = useSelector((state: ProjectRoot) => state.projects.showAddEditModal);
  const selectedItemForEdit = useSelector((state: ProjectRoot) => state.projects.selectedItemForEdit);
  const showDeleteModal = useSelector((state: ProjectRoot) => state.projects.showDeleteModal);
  const selectedItemForDelete = useSelector((state: ProjectRoot) => state.projects.selectedItemForDelete);
  const dispatch = useDispatch();

  //State management api
  const {data: projects, isLoading: isProjectLoading, refetch} = useGetAllProjectsQuery('');
  const [createProject] = useCreateProjectMutation();
  const [updateProject] = useUpdateProjectMutation();
  const [deleteProject] = useDeleteProjectMutation();


  if (isProjectLoading) {
    return <div>Wait...</div>
  }

  const onFinish = async (adminProject: Project) => {
    try {
      if (selectedItemForEdit) {
        await updateProject({id: selectedItemForEdit.id, updateProject: adminProject});
        message.success('Project updated successfully');
      } else {
        await createProject(adminProject);
        message.success('Project added successfully');
      }
      dispatch(setShowAddEditModal(false));
      refetch();
    } catch (err) {
      message.error('An error occurred');
    }
  };

  const onDelete = async (id: any) => {
    try {
      await deleteProject(id);
      dispatch(setShowDeleteModal(false));
      refetch();
      message.success('Project deleted successfully');
    } catch (err) {
      message.error('An error occurred');
    }
  };

  return (
    <div>
      <div className='flex justify-end'>
        <button className='bg-primary px-5 py-2 text-white' onClick={() => {
          dispatch(setSelectedItemForEdit(null))
          form.resetFields();
          dispatch(setShowAddEditModal(true))
        }}>Add Project
        </button>
      </div>
      <div className='grid grid-cols-4 gap-5 mt-5'>
        {
          projects?.map((project: Project) => (
            <div key={project?.id} className='shadow border p-5 border-gray-400 flex flex-col'>
              <h1 className='text-primary text-xl font-bold'>{project?.period}</h1>
              <hr/>
              <h1>Company : {project?.content}</h1>
              <h1>Role : {project?.title}</h1>
              <h1>{project?.description}</h1>
              <h1>{project?.imageUrl}</h1>
              <h1>{project?.period}</h1>
              <h1>{project?.technologies}</h1>
              <h1>{project?.personal}</h1>
              <div className='flex justify-end gap-5 mt-5'>
                <button className='bg-primary text-white px-5 py-2' onClick={() => {
                  dispatch(setSelectedItemForEdit(project));
                  form.setFieldsValue(project);
                  dispatch(setShowAddEditModal(true));
                }}>Edit
                </button>
                <button
                  className='bg-red-500 text-white px-5 py-2'
                  onClick={() => {
                    dispatch(setSelectedItemForDelete(project));
                    dispatch(setShowDeleteModal(true))
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
      <Modal open={showAddEditModal} title={selectedItemForEdit ? 'Edit Project' : 'Add Project'} footer={null}
             onCancel={() => {
               dispatch(setSelectedItemForEdit(null))
               dispatch(setShowAddEditModal(false))
             }}>
        <Form form={form} layout='vertical' onFinish={onFinish}>
          <Form.Item name='period' label='Period'>
            <input placeholder='Period'/>
          </Form.Item>
          <Form.Item name='content' label='Content'>
            <input placeholder='Content'/>
          </Form.Item>
          <Form.Item name='title' label='Title'>
            <input placeholder='Title'/>
          </Form.Item>
          <Form.Item name='description' label='Description'>
            <input placeholder='Description'/>
          </Form.Item>
          <Form.Item name='link' label='Link'>
            <input placeholder='Link'/>
          </Form.Item>
          <Form.Item name='imageUrl' label='ImageUrl'>
            <input placeholder='ImageUrl'/>
          </Form.Item>
          <Form.Item name='technologies' label='Technologies'>
            <Select
              mode="tags"
              style={{ width: '100%'}}
              placeholder="Add Technology"
              tokenSeparators={[',']}
            >
            </Select>
          </Form.Item>
          <Form.Item name='personal' label='Personal' valuePropName='checked'>
            <Switch className='bg-primary'/>
          </Form.Item>
          <div className='flex justify-end'>
            <button className='bg-primary text-white px-5 py-2'>
              {selectedItemForEdit ? 'Update' : 'Add'}
            </button>
          </div>
        </Form>
      </Modal>
      <Modal open={showDeleteModal} title={'Are you sure you want to delete?'} footer={null}
             onCancel={() => {
               dispatch(setSelectedItemForDelete(null))
               dispatch(setShowDeleteModal(false))
             }}>
        <div className='flex justify-center items-center gap-5'>
          <button
            className='border-primary text-primary px-5 py-2'
            onClick={() => {
              dispatch(setSelectedItemForDelete(null))
              dispatch(setShowDeleteModal(false))
            }}
          >
            No
          </button>
          <button
            className='bg-red-500 text-white px-5 py-2'
            onClick={() => onDelete(selectedItemForDelete?.id)}
          >
            Yes
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default AdminProject
