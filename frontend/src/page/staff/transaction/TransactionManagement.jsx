import { Table, Input, Space, Typography, Row, Col, message, Select, Form } from "antd";
import { EditOutlined, EyeOutlined} from "@ant-design/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { getTransactionStatus, transactionStatus } from "../../../utils/status";
import { filterTransactionsAsync, loadTransactionsListAsync, searchTransactionsAsync } from "../../../redux/staff/transaction/actions/transactionsList.action";
import { getTransactionType, transactionTypes } from "../../../utils/transactionType";
const {Text} = Typography;
const {Search} = Input;



function TransactionManagement() {

  const dispatch = useDispatch();
  const history = useHistory();
  const transactionsListState = useSelector(state => state.transactionsList);

  useEffect(() => {
    dispatch(loadTransactionsListAsync());
  },[])


//   useEffect(() => {
//     showMessage();
// }, [transactionState])

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Id ví gửi",
      dataIndex: "senderWalletId",
    },
    {
      key: "3",
      title: "Id ví nhận",
      dataIndex: "senderWalletId",
    },
    {
      key: "4",
      title: "Mô tả",
      dataIndex: "description",
    },
    {
      key: "5",
      title: "Loại giao dịch",
      dataIndex: "transactionType",
      render: (_, record) => {
				return (
					<>
						<Text >{getTransactionType(record.transactionType)}</Text>
					</>
				);
			}
    },
    {
      key: "6",
      title: "Số tiền",
      dataIndex: "amount",
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
						<Text style={{ color: `${color}` }}>{getTransactionStatus(record.status)}</Text>
					</>
				);
			}
		},
    {
      key: "9",
      title: "Thông tin ví momo",
      dataIndex: "status",
      render: (_, record) => {
        if (!record.shortSenderWallet) return <></>;
        
        const {momoUsername, momoNumber} = record.shortSenderWallet;
				return (
					<>
						<Text >Tên: {momoUsername}</Text> <br/>
            <Text >Số momo: {momoNumber}</Text>
					</>
				);
			}
    },
    {
      key: "10",
      title: "",
      render: (record) => {
        return (
          <>
          <Space size="large">
						{/* <EyeOutlined
							style={{ color: "#1e81b0" }}
              onClick={() => {
                onDetail(record.id);
              }}
						/> */}
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
  //   dispatch(loadTransactionDetailAsync(id));
  //   history.push(`/transaction/update-transaction/${id}`); 
  // }

  const onDetail = (id) => {
    history.push(`transaction/detail-transaction/${id}`)
  }


//   const showMessage = () => {
//     if(transactionState.isSuccess){
//         message.success("Ngừng hoạt động tài khoản thành công");
//         dispatch(loadTransactionsListAsync());
//         dispatch(clearTransactionMessage());
//     }
//     else if(transactionState.error !== ""){
//         message.error(transactionState.error);
//         dispatch(clearTransactionMessage());
//     }
// }


  // const onSearch = (value) => {
  //       dispatch(searchTransactionsAsync(value));
  // };

  const onChange = (props, values) => {
    dispatch(filterTransactionsAsync(values));
  }

  // return   loading ? (
  //   <CustomSpin />
  // ) : (
    return (
    <>
			<div style={{ minHeight: "80vh" }}>
				<Row justify="end" style={{ padding: "10px" }}>
            <Form 
                layout="horizontal"
                autoComplete="off"
                onValuesChange={onChange}
            >
              <Row gutter={50}>
                <Col style={{width: "300px"}}>
                    <Form.Item 
                          name="type" 
                          label="Loại giao dịch"
                      >
                      <Select placeholder="Chọn loại giao dịch" defaultValue={null}>
                          <Select.Option value={null}>Tất cả</Select.Option>
                          {transactionTypes.map(({id, type}) => {
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
                          {transactionStatus.map(({id, state}) => {
                                  return (
                                      <Select.Option value={id}>{state}</Select.Option>
                                  )
                          })}
                      </Select>
                    </Form.Item>
                </Col>
              </Row>
            </Form>
				</Row>
				<Row justify="center" align="center" style={{ padding: "2%" }}>
					<Col span={22}>
						<Table columns={columns} dataSource={transactionsListState.data} > </Table>

          </Col>
				</Row>
			</div>
		</>
  );
}

export default TransactionManagement;