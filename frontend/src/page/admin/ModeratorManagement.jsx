import { Button, Table, Modal, Input, Space, Typography, Row, Col } from "antd";
import { EditOutlined, EyeOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadModeratorsListAsync, searchModeratorsAsync } from "../../redux/moderator/actions/moderatorsList.action";
import CustomSpin from "../../common/CustomSpin";
import { diableModeratorAsync, loadModeratorDetailAsync } from "../../redux/moderator/actions/moderator.action.js";
import moment from "moment";
import { getRoleName, getRolesApi } from "../../api/roleApi";
const {Text} = Typography;
const {Search} = Input;



function ModeratorManagement() {

  const dispatch = useDispatch();
  const history = useHistory();
  const { data, loading, searchValue, pagination, error } = useSelector(
		(state) => state.moderatorsList
	);

  // const { roles, roleError } = useSelector(
	// 	(state) => state.rolesList
	// );
  const roles = getRolesApi();

  const {user} = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(loadModeratorsListAsync());
  },[])

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
    // {
    //   key: "4",
    //   title: "Ngày sinh",
    //   dataIndex: "dateOfBirth",
    //   render: (_, record) => {
		// 		return (
		// 			<>
		// 				<Text >{moment(record.dateOfBirth,'DD/MM/YYYY')}</Text>
		// 			</>
		// 		);
		// 	}
    // },
    {
      key: "5",
      title: "Địa chỉ",
      dataIndex: "address",
    },
    {
			title: "Trạng thái",
			dataIndex: "status",
			key: "6",
			render: (_, record) => {
				let color;
				if (record.status === "enable") color = "Green";
				else color = "red";
				return (
					<>
						<Text style={{ color: `${color}` }}>{record.status}</Text>
					</>
				);
			}
		},
    {
      key: "7",
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
						{(record.status !== "disable" && record.id !== user.id) ? <MinusCircleOutlined
							style={{ color: "red" }}
              onClick={() => {
                onDisable(record.id);
              }}/> : null
              
            }
					</Space>
          </>
        );
      },
    },
  ];

  const onCreate = () => {
    history.push("/admin/create-moderator"); 
  }

  const onUpdate = (id) => {
    dispatch(loadModeratorDetailAsync(id));
    history.push(`/admin/update-moderator/${id}`); 
  }

  const onDetail = (id) => {
    dispatch(loadModeratorDetailAsync(id));
    history.push(`/admin/detail-moderator/${id}`); 
  }

  const onDisable = (id) => {
    Modal.confirm({
      title: "Bạn muốn vô hiệu hóa tài khoản này?",
      okText: "Đồng Ý",
      okType: "danger",
      onOk: () => {
          dispatch(diableModeratorAsync(id));
          dispatch(loadModeratorsListAsync());
      },
      cancelText: "Không",
    });
  };

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