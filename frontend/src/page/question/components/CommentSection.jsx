import { Button, Col, Divider, Row } from "antd";
import RichTextEditor from "../../../common/RichTextEditor.jsx";
import ListComments from "./ListComments.jsx";

const CommentSection = ({ comments }) => {
	return (
		<>
			<Divider orientation="left" plain>
				Bình luận
			</Divider>
			<Col>
				<RichTextEditor />
				<Row justify="end">
					<Col>
						<Button type="primary" size="large" style={{ marginTop: "20px" }}>
							Bình luận
						</Button>
					</Col>
				</Row>
			</Col>
			<ListComments comments={comments} />
		</>
	);
};

export default CommentSection;
