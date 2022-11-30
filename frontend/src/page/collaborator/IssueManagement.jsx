import { Table, Input, Space, Typography, Row, Col, message, Select, Form } from "antd";
import { EditOutlined, EyeOutlined} from "@ant-design/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import moment from "moment";
import { loadIssuesListAsync } from "../../redux/collaborator/issue/actions/issuesList.action";
const {Text} = Typography;
const {Search} = Input;



function IssueManagement() {

  const dispatch = useDispatch();
  const history = useHistory();
  const issuesListState = useSelector(state => state.issuesList);
  useEffect(() => {
    dispatch(loadIssuesListAsync());
  },[])


//   useEffect(() => {
//     showMessage();
// }, [withdrawRequestState])

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Tiêu đề",
      dataIndex: "title",
    },
    {
      key: "3",
      title: "Mô tả",
      dataIndex: "description",
    },
    {
      key: "4",
      title: "Người tạo",
      dataIndex: "creatorId",
      render: (_, record) => {
				return (
					<>
						<Link to={`/profile/${record.creatorId}`}>{record.creatorId}</Link>
					</>
				);
			}
    },
    {
      key: "5",
      title: "Meeting",
      dataIndex: "meetingId",
    },
    {
      key: "6",
      title: "Người bị báo cáo",
      dataIndex: "reportedStudentId",
      render: (_, record) => {
				return (
					<>
						<Link to={`/profile/${record.reportedStudentId}`}>{record.reportedStudentId}</Link>
					</>
				);
			}
    },
    {
      key: "7",
      title: "Thời gian tạo",
      dataIndex: "createdTime",
      render: (_, record) => {
				return (
					<>
						<Text >{moment(record.createdTime).format("DD/MM/YYYY hh:mm:ss")}</Text>
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
				if (record.status == 0) color = "yellow";
        if (record.status == 1) color = "green";
        if (record.status == 2) color = "red";
				return (
					<>
						<Text style={{ color: `${color}` }}>{record.status}</Text>
					</>
				);
			}
		},
    {
      key: "9",
      title: "Kết quả giải quyết",
      dataIndex: "solution",
    },
    {
      key: "10",
      title: "Thời gian giải đáp",
      dataIndex: "resolvedTime",
      render: (_, record) => {
				return (
					<>
						<Text >{moment(record.resolvedTime).format("DD/MM/YYYY hh:mm:ss")}</Text>
					</>
				);
			}
    },
    {
      key: "11",
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
						/>
						 */}
					</Space>
          </>
        );
      },
    },
  ];

  // const onUpdate = (id) => {
  //   dispatch(loadWithdrawRequestDetailAsync(id));
  //   history.push(`/withdrawRequest/update-withdrawRequest/${id}`); 
  // }

  const onDetail = (id) => {
    history.push(`issue/detail-issue/${id}`)
  }


//   const showMessage = () => {
//     if(withdrawRequestState.isSuccess){
//         message.success("Ngừng hoạt động tài khoản thành công");
//         dispatch(loadWithdrawRequestsListAsync());
//         dispatch(clearWithdrawRequestMessage());
//     }
//     else if(withdrawRequestState.error !== ""){
//         message.error(withdrawRequestState.error);
//         dispatch(clearWithdrawRequestMessage());
//     }
// }


  // const onSearch = (value) => {
  //       dispatch(searchWithdrawRequestsAsync(value));
  // };

  // return   loading ? (
  //   <CustomSpin />
  // ) : (
    return (
    <>
			<div style={{ minHeight: "80vh" }}>
				{/* <Row justify="end" style={{ padding: "10px" }}>
            <Form 
                layout="horizontal"
                autoComplete="off"
            >
              <Row gutter={50}>
                <Col style={{width: "300px"}}>
                    <Form.Item 
                          name="type" 
                          label="Loại giao dịch"
                      >
                      <Select placeholder="Chọn loại giao dịch" defaultValue={null}>
                          <Select.Option value={null}>Tất cả</Select.Option>
                          {issueTypes.map(({id, type}) => {
                                  return (
                                      <Select.Option value={id}>{type}</Select.Option>
                                  )
                          })}
                      </Select>
                    </Form.Item>
                </Col>
                <Col style={{width: "300px"}}>
                    <Form.Item 
                          name="status" 
                          label="Trạng thái"
                      >
                      <Select placeholder="Chọn loại trạng thái" defaultValue={null}>
                          <Select.Option value={null}>Tất cả</Select.Option>
                          {issueStatus.map(({id, state}) => {
                                  return (
                                      <Select.Option value={id}>{state}</Select.Option>
                                  )
                          })}
                      </Select>
                    </Form.Item>
                </Col>
              </Row>
            </Form>
				</Row> */}
				<Row justify="center" align="center" style={{ padding: "2%" }}>
					<Col span={22}>
						<Table columns={columns} dataSource={issuesListState.data} > </Table>

          </Col>
				</Row>
			</div>
		</>
  );
}

export default IssueManagement;