import { Button, Table, Modal, Input, Space, Typography, Row, Col, message } from "antd";
import { EditOutlined, EyeOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { clearSubjectMessage, diableSubjectAsync, loadSubjectDetailAsync } from "../../../../redux/staff/category/subject/actions/subject.action";
import { loadSubjectsListAsync, searchSubjectsAsync } from "../../../../redux/staff/category/subject/actions/subjectsList.action";
import CustomSpin from "../../../../common/CustomSpin";
import { getStatus } from "../../../../utils/status";
import { loadMajorsListAsync } from "../../../../redux/staff/category/major/actions/majorsList.action";
import { getMajorName } from "../../../../utils/major";
const {Text} = Typography;
const {Search} = Input;



function SubjectManagement() {

  const dispatch = useDispatch();
  const history = useHistory();
  const { data, loading, searchValue, pagination, error } = useSelector(
		(state) => state.subjectsList 
	);

  const subjectState = useSelector((state) => state.subject);
  const majorState = useSelector(state => state.majorsList)

  useEffect(() => {
    dispatch(clearSubjectMessage());
    dispatch(loadSubjectsListAsync());
    dispatch(loadMajorsListAsync());
  },[])


  useEffect(() => {
    showMessage();
}, [subjectState])

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Tên môn học",
      dataIndex: "name",
    },  
    {
      key: "3",
      title: "Tên chuyên ngành",
      dataIndex: "majorId",
      render: (_, record) => {
				return (
					<>
						<Text >{getMajorName(majorState.data,record.majorId)}</Text>
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
						{(record.status != 2 ) ? <MinusCircleOutlined
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
    history.push("/subject/create-subject"); 
  }

  const onUpdate = (id) => {
    dispatch(loadSubjectDetailAsync(id));
    history.push(`/subject/update-subject/${id}`); 
  }

  const onDetail = (id) => {
    dispatch(loadSubjectDetailAsync(id));
    history.push(`/subject/detail-subject/${id}`); 
  }

  const onDisable = (id) => {
    Modal.confirm({
      title: "Bạn muốn ngừng hoạt động môn học này?",
      okText: "Đồng Ý",
      okType: "danger",
      onOk: () => {
          dispatch(diableSubjectAsync(id));
      },
      cancelText: "Không",
    });
  };

  const showMessage = () => {
    if(subjectState.isSuccess){
        message.success("Ngừng hoạt động môn học thành công");
        dispatch(clearSubjectMessage());
        dispatch(loadSubjectsListAsync());
    }
    else if(subjectState.error !== ""){
        message.error(subjectState.error);
        dispatch(clearSubjectMessage());
    }
}


  const onSearch = (value) => {
        dispatch(searchSubjectsAsync(value));
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
								Thêm môn học
							</Button>
						</Col>

						<Table columns={columns} dataSource={data} > </Table>

            </Col>
				</Row>
			</div>
		</>
  );
}

export default SubjectManagement;