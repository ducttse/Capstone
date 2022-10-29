import { EyeOutlined, EditOutlined, MinusCircleOutlined } from '@ant-design/icons';
import {Col, Row, Table, Button, Typography, Input, Space, Modal, message} from 'antd';
import { useState } from 'react';
import CreateModeratorForm from './CreateModerator';
import UpdateModeratorForm from './UpdateModerator';

const {Text} = Typography;
const { Search } = Input;


const dataSource = [
    {
        id: '1',
        displayName: 'John Brown',
        roleId: 1,
        email: 'admin@gmail.com',
        status: 'Disable',
      },
      {
        id: '2',
        displayName: 'John Brown',
        roleId: 2,
        email: 'staff@gmail.com',
        status: 'Enable',
      },
      {
        id: '3',
        displayName: 'John Brown',
        roleId: 1,
        email: 'admin123@gmail.com',
        status: 'Enable',
      },
]

const ModeratorManagementPage = () => {

    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);


    const showCreatelModal = () => {
        setIsCreateModalOpen(true);
    };
    
    const closeCreateModal = () => {
        setIsCreateModalOpen(false);
    };



    const showUpdateModal = () => {
        setIsUpdateModalOpen(true);
    };
    
    const closeUpdateModal = () => {
        setIsUpdateModalOpen(false);
    };

    const showDisalbeConfirm = () => {
        Modal.confirm({
          title: 'Vô hiệu hóa tài khoản',
          content: 'Bạn có chắc mình muốn vô hiệu hóa tài khoản này?',
          okText: 'Yes',
          okType: 'danger',
          cancelText: 'No',
          onOk() {
            console.log('OK');
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      };

    const columns = [
        {
          title: 'Id',
          dataIndex: 'id',
          key: 'id'
        },
        {
          title: 'Tên hiển thị',
          dataIndex: 'displayName',
          key: 'displayName'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
          },
        {
          title: 'Chức danh',
          dataIndex: 'roleId',
          key: 'role',
          render: (_, record) => {
            let role;
            if(record.roleId == 1) role = "Nhân viên quản lý nhân sự";
            else role = "Nhân viên quản lý khách hàng";
            return (<>
                <Text>{role}</Text>
            </>);
          },
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            render: (_, record) => {
                let color;
                if(record.status == 'Enable') color = "Green";
                else color = "red";
                return (<>
                    <Text style={{color: `${color}`}}>{record.status}</Text>
                </>);
              },
          },
          {
            title: '',
            dataIndex: 'action',
            key: 'action',
            render: () => (
                <Space size="large">
                  <EditOutlined style={{color: "#e28743"}} onClick={showUpdateModal}/>
                  <MinusCircleOutlined style={{color: "red"}} onClick={showDisalbeConfirm}/>
                </Space>
              ),
          }
      ];

      const onSearch = (value) => console.log(value);

    return (<>
     <Row justify='center' align='center'>
        <Col >
           <Space size="large" direction='vertical'>
           <Search placeholder="Nhập email" allowClear onSearch={onSearch} />
            <Col span={6}>
                <Button block type="primary" htmlType="submit" onClick={showCreatelModal} size="middle" >
                                    Tạo nhân viên
                </Button>
            </Col>
            
            <Table columns={columns} 
                    dataSource={dataSource}
                    pagination
                    >

            </Table>
           </Space>
        </Col>
        <Modal open={isCreateModalOpen} onCancel={closeCreateModal} 
                                    footer={null}>
                                <CreateModeratorForm/>
        </Modal>

        <Modal open={isUpdateModalOpen} onCancel={closeUpdateModal} 
                            footer={null}>
                    <UpdateModeratorForm/>
        </Modal>
     </Row>

    </>);
}

export default ModeratorManagementPage;