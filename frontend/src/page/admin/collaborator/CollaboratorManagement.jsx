import { Button, Table, Modal, Input, Space, Typography, Row, Col, message } from "antd";
import { EditOutlined, EyeOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadCollaboratorsListAsync, searchCollaboratorsAsync } from "../../../redux/admin/collaborator/actions/collaboratorsList.action";
import CustomSpin from "../../../common/CustomSpin";
import { clearCollaboratorMessage, diableCollaboratorAsync, loadCollaboratorDetailAsync } from "../../../redux/admin/collaborator/actions/collaborator.action.js";
import moment from "moment";
import { getRoleName, getRolesApi } from "../../../api/roleApi";
import { getStatus } from "../../../utils/status";
import { getMajorName } from "../../../utils/major";
import { loadMajorsListAsync } from "../../../redux/staff/category/major/actions/majorsList.action";
const {Text} = Typography;
const {Search} = Input;



function CollaboratorManagement() {

  const dispatch = useDispatch();
  const history = useHistory();
  const { data, loading, searchValue, pagination, error } = useSelector(
		(state) => state.collaboratorsList 
	);

  const collaboratorState = useSelector((state) => state.collaborator);
  const majorsListState = useSelector(state => state.majorsList);
  const {user} = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(loadCollaboratorsListAsync());
    dispatch(clearCollaboratorMessage());
    if(majorsListState.data.length == 0){
      dispatch(loadMajorsListAsync());
    }
  },[])


  useEffect(() => {
    showMessage();
}, [collaboratorState])

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Họ tên",
      dataIndex: "fullName",
    },
    {
      key: "3",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "4",
      title: "Chuyên ngành",
      dataIndex: "majorId",
      render: (_, record) => {
				return (
					<>
						<Text >{getMajorName(majorsListState.data,record.majorId)}</Text>
					</>
				);
			}
    },
    
   {
      key: "5",
      title: "Điện thoại",
      dataIndex: "phone",
    },
    {
      key: "6",
      title: "Địa chỉ",
      dataIndex: "address",
    },
    {
      key: "7",
      title: "Ngày sinh",
      dataIndex: "dateOfBirth",
      render: (_, record) => {
				return (
					<>
						<Text >{moment(record.dateOfBirth).format("DD/MM/YYYY")}</Text>
					</>
				);
			}
    },
    {
			title: "Trạng thái",
			dataIndex: "status",
			key: "8",
			render: (_, record) => {
				let color;
				if (record.status == 2) color = "red";
				return (
					<>
						<Text style={{ color: `${color}` }}>{getStatus(record.status)}</Text>
					</>
				);
			}
		},
    {
      key: "9",
      title: "",
      render: (record) => {
        return (
          <>
          <Space size="large">
						<EyeOutlined
							style={{ color: "#1e81b0" }}
              onClick={() => {
                onDetail(record.id);
              }}
						/>
						<EditOutlined
							style={{ color: "#e28743" }}
              onClick={() => {
                onUpdate(record.id);
              }}
						/>
						{(record.status != 2) ? <MinusCircleOutlined
							style={{ color: "red" }}
              onClick={() => {
                onDisable(record.accountId);
              }}/> : null
              
            }
					</Space>
          </>
        );
      },
    },
  ];

  const onCreate = () => {
    history.push("/collaborator/create-collaborator"); 
  }

  const onUpdate = (id) => {
    dispatch(loadCollaboratorDetailAsync(id));
    history.push(`/collaborator/update-collaborator/${id}`); 
  }

  const onDetail = (id) => {
    dispatch(loadCollaboratorDetailAsync(id));
    history.push(`/collaborator/detail-collaborator/${id}`); 
  }

  const onDisable = (id) => {
    Modal.confirm({
      title: "Bạn muốn vô hiệu hóa tài khoản này?",
      okText: "Đồng Ý",
      okType: "danger",
      onOk: () => {
          dispatch(diableCollaboratorAsync(id));
      },
      cancelText: "Không",
    });
  };

  const showMessage = () => {
    if(collaboratorState.isSuccess){
        message.success("Ngừng hoạt động tài khoản thành công");
        dispatch(loadCollaboratorsListAsync());
        dispatch(clearCollaboratorMessage());
    }
    else if(collaboratorState.error !== ""){
        message.error(collaboratorState.error);
        dispatch(clearCollaboratorMessage());
    }
}


  const onSearch = (value) => {
        dispatch(searchCollaboratorsAsync(value));
  };



  return   loading && majorsListState.loading ? (
    <CustomSpin />
  ) : (
    <>
			<div style={{ minHeight: "80vh" }}>

				<Row justify="center" align="center" style={{ padding: "10px" }}>
        <Search
            placeholder="Nhập tên"
            onSearch={onSearch}
            style={{ width: "50%", minWidth: "400px", maxWidth: "600px" }}
            defaultValue = {searchValue}
            allowClear
          />
				</Row>
				<Row justify="center" align="center" style={{ padding: "2%" }}>
					<Col span={22}>
						<Col span={4}>
							<Button
								block
								type="primary"
								htmlType="submit"
								onClick={onCreate}
								style={{ marginBottom: "20px", width: "150px" }}
							>
								Thêm Cộng tác viên
							</Button>
						</Col>

						<Table columns={columns} dataSource={data} > </Table>

            </Col>
				</Row>
			</div>
		</>
  );
}

export default CollaboratorManagement;