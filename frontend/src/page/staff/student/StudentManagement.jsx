import { Button, Table, Modal, Input, Space, Typography, Row, Col, message } from "antd";
import { EditOutlined, EyeOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { clearStudentMessage, diableStudentAsync, loadStudentDetailAsync } from "../../../redux/staff/student/actions/student.action";
import { loadStudentsListAsync, searchStudentsAsync } from "../../../redux/staff/student/actions/studentsList.action";
import { getStatus } from "../../../utils/status";
import CustomSpin from "../../../common/CustomSpin";
const {Text} = Typography;
const {Search} = Input;



function StudentManagement() {

  const dispatch = useDispatch();
  const history = useHistory();
  const { data, loading, searchValue, pagination, error } = useSelector(
		(state) => state.studentsList 
	);

  const studentState = useSelector((state) => state.student);


  useEffect(() => {
    dispatch(clearStudentMessage());
    dispatch(loadStudentsListAsync());
  },[])


  useEffect(() => {
    showMessage();
}, [studentState])

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
      key: "5",
      title: "Đánh giá",
      dataIndex: "reputation",
    },
    {
      key: "6",
      title: "Cảnh cáo",
      dataIndex: "flag",
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
						{/* <EditOutlined
							style={{ color: "#e28743" }}
              onClick={() => {
                onUpdate(record.id);
              }}
						/> */}
						{(record.status != 2 ) ? <MinusCircleOutlined
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

  // const onUpdate = (id) => {
  //   dispatch(loadStudentDetailAsync(id));
  //   history.push(`/student/update-student/${id}`); 
  // }

  const onDetail = (id) => {
    dispatch(loadStudentDetailAsync(id));
    history.push(`/student/detail-student/${id}`); 
  }

  const onDisable = (id) => {
    Modal.confirm({
      title: "Bạn muốn vô hiệu hóa tài khoản này?",
      okText: "Đồng Ý",
      okType: "danger",
      onOk: () => {
          dispatch(diableStudentAsync(id));
      },
      cancelText: "Không",
    });
  };

  const showMessage = () => {
    if(studentState.isSuccess){
        message.success("Ngừng hoạt động tài khoản thành công");
        dispatch(clearStudentMessage());
        dispatch(loadStudentsListAsync());
    }
    else if(studentState.error !== ""){
        message.error(studentState.error);
        dispatch(clearStudentMessage());
    }
}


  const onSearch = (value) => {
        dispatch(searchStudentsAsync(value));
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
              <Table columns={columns} dataSource={data} > </Table>

            </Col>
				</Row>
			</div>
		</>
  );
}

export default StudentManagement;