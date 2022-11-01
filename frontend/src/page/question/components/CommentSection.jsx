import { Button, Col, Divider, Form, Row } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import RichTextEditor from "../../../common/RichTextEditor.jsx";
import ListComments from "./ListComments.jsx";

const CommentSection = ({ comments, handleComment, loading }) => {
	const [form] = Form.useForm();
	const [comment, setComment] = useState("");

	const onFinish = (values) => {
		// call api to put comment
		handleComment(values);
	};

	const onValuesChange = (_, values) => {
		setComment(values);
	};

	useEffect(() => {
		if (loading) setComment("");
	}, [loading]);

	return (
		<>
			<Divider orientation="left" plain>
				Bình luận
			</Divider>
			<Form
				form={form}
				layout="vertical"
				autoComplete="off"
				onFinish={onFinish}
				onValuesChange={onValuesChange}
				initialValues={comment}
			>
				<Col>
					<Form.Item
						rules={[
							{ required: true, message: "Bình luận không được để trống" }
						]}
						name="comment"
					>
						<RichTextEditor />
					</Form.Item>
					<Row justify="end">
						<Col>
							<Button
								htmlType="submit"
								type="primary"
								size="large"
								style={{ marginTop: "20px" }}
							>
								Bình luận
							</Button>
						</Col>
					</Row>
				</Col>
			</Form>
			<ListComments comments={comments} />
		</>
	);
};

export default CommentSection;
