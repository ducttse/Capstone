import { Button, Table, Modal, Input, Space, Typography, Row, Col, message } from "antd";
import { EditOutlined, EyeOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { clearMajorMessage, diableMajorAsync, loadMajorDetailAsync } from "../../../../redux/staff/category/major/actions/major.action";
import { loadMajorsListAsync, searchMajorsAsync } from "../../../../redux/staff/category/major/actions/majorsList.action";
import CustomSpin from "../../../../common/CustomSpin";
import { getStatus } from "../../../../utils/status";
const {Text} = Typography;
const {Search} = Input;



function MajorManagement() {

  const dispatch = useDispatch();
  const history = useHistory();
  const { data, loading, searchValue, pagination, error } = useSelector(
		(state) => state.majorsList 
	);

  const majorState = useSelector((state) => state.major);

  useEffect(() => {
    dispatch(clearMajorMessage());
    dispatch(loadMajorsListAsync());
  },[])


  useEffect(() => {
    showMessage();
}, [majorState])

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Tên chuyên ngành",
      dataIndex: "name",
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
    history.push("/major/create-major"); 
  }

  const onUpdate = (id) => {
    dispatch(loadMajorDetailAsync(id));
    history.push(`/major/update-major/${id}`); 
  }

  const onDetail = (id) => {
    dispatch(loadMajorDetailAsync(id));
    history.push(`/major/detail-major/${id}`); 
  }

  const onDisable = (id) => {
    Modal.confirm({
      title: "Bạn muốn ngừng hoạt động chuyên ngành này?",
      okText: "Đồng Ý",
      okType: "danger",
      onOk: () => {
          dispatch(diableMajorAsync(id));

      },
      cancelText: "Không",
    });
  };

  const showMessage = () => {
    if(majorState.isSuccess){
        message.success("Ngừng hoạt động chuyên ngành thành công");
        dispatch(clearMajorMessage());
        dispatch(loadMajorsListAsync());
    }
    else if(majorState.error !== ""){
        message.error(majorState.error);
        dispatch(clearMajorMessage());
    }
}


  const onSearch = (value) => {
        dispatch(searchMajorsAsync(value));
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
								Thêm chuyên ngành
							</Button>
						</Col>

						<Table columns={columns} dataSource={data} > </Table>

            </Col>
				</Row>
			</div>
		</>
  );
}

export default MajorManagement;