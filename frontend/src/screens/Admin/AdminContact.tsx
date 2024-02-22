import {useDeleteContactMutation, useGetAllEmailsQuery} from "../../redux/api/contactApiSlice";
import {message, Modal, Table} from "antd";
import {setSelectedItemForDelete, setShowDeleteModal} from "../../redux/features/project/projectSlice";
import {useDispatch, useSelector} from "react-redux";
import {Contact, ContactRoot} from "../../interfaces/contacts.interface";


const AdminContact = () => {

  // State management local
  const showDeleteModal = useSelector((state: ContactRoot) => state.projects.showDeleteModal);
  const selectedItemForDelete = useSelector((state: ContactRoot) => state.projects.selectedItemForDelete);
  const dispatch = useDispatch();

  //State management api
  const {data: dataContacts, isLoading, refetch} = useGetAllEmailsQuery('');
  const [deleteContact] = useDeleteContactMutation()

  if (isLoading) {
    return <div>Wait...</div>
  }

  const onDelete = async (id: any) => {
    try {
      await deleteContact(id);
      dispatch(setShowDeleteModal(false));
      refetch();
      message.success('Experience deleted successfully');
    } catch (err) {
      message.error('An error occurred');
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastname',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'message',
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: string, contact: Contact) => (
        <button
          className='bg-red-500 text-white px-5 py-2'
          onClick={() => {
            dispatch(setSelectedItemForDelete(contact));
            dispatch(setShowDeleteModal(true));
          }}
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <div>
      <Table dataSource={dataContacts} columns={columns} pagination={false} />
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

export default AdminContact
