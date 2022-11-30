import { Button, Table, Modal, Input, Space, Typography, Row, Col, message } from "antd";
import { EditOutlined, EyeOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadModeratorsListAsync, searchModeratorsAsync } from "../../../redux/admin/moderator/actions/moderatorsList.action";
import CustomSpin from "../../../common/CustomSpin";
import { clearModeratorMessage, diableModeratorAsync, loadModeratorDetailAsync } from "../../../redux/admin/moderator/actions/moderator.action.js";
import moment from "moment";
import { getRoleName, getRolesApi } from "../../../api/roleApi";
import { getStatus } from "../../../utils/status";
const {Text} = Typography;
const {Search} = Input;



function ModeratorManagement() {

  const dispatch = useDispatch();
  const history = useHistory();
  const { data, loading, searchValue, pagination, error } = useSelector(
		(state) => state.moderatorsList 
	);

  const moderatorState = useSelector((state) => state.moderator);
  const roles = getRolesApi();

  const {user} = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(clearModeratorMessage());
    dispatch(loadModeratorsListAsync());
  },[])


  useEffect(() => {
    showMessage();
}, [moderatorState])

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
      title: "Chức danh",
      dataIndex: "roleId",
      render: (_, record) => {
				return (
					<>
						<Text >{getRoleName(record.roleId)}</Text>
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
						{(record.status !== 2 && record.accountId != user.accountId) ? <MinusCircleOutlined
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
    history.push("/moderator/create-moderator"); 
  }

  const onUpdate = (id) => {
    dispatch(loadModeratorDetailAsync(id));
    history.push(`/moderator/update-moderator/${id}`); 
  }

  const onDetail = (id) => {
    dispatch(loadModeratorDetailAsync(id));
    history.push(`/moderator/detail-moderator/${id}`); 
  }

  const onDisable = (id) => {
    Modal.confirm({
      title: "Bạn muốn vô hiệu hóa tài khoản này?",
      okText: "Đồng Ý",
      okType: "danger",
      onOk: () => {
          dispatch(diableModeratorAsync(id));
      },
      cancelText: "Không",
    });
  };

  const showMessage = () => {
    if(moderatorState.isSuccess){
        message.success("Ngừng hoạt động tài khoản thành công");
        dispatch(loadModeratorsListAsync());
        dispatch(clearModeratorMessage());
    }
    else if(moderatorState.error !== ""){
        message.error(moderatorState.error);
        dispatch(clearModeratorMessage());
    }
}


  const onSearch = (value) => {
        dispatch(searchModeratorsAsync(value));
  };



  return   loading ? (
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
								Thêm nhân viên
							</Button>
						</Col>

						<Table columns={columns} dataSource={data} > </Table>

            </Col>
				</Row>
			</div>
		</>
  );
}

export default ModeratorManagement;