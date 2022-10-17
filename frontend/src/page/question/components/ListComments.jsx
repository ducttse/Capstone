import { Comment, List } from "antd";
import { vnMoment } from "../../../utils/vnMoment.js";
import dummyAva from "./ava.jpeg";

const formatRawData = (data) => {
	return {
		author: data.name,
		avatar: dummyAva,
		content: data.content,
		datetime: vnMoment(data.createdTime).format("LLL")
	};
};

const CustomeComment = ({ data }) => {
	return <Comment {...data} />;
};

const ListComments = ({ comments }) => {
	return (
		<>
			<List
				className="comment-list"
				header={`${comments.length} bình luận`}
				itemLayout="horizontal"
				dataSource={comments}
				renderItem={(item) => (
					<li>
						<CustomeComment data={formatRawData(item)} />
					</li>
				)}
			/>
		</>
	);
};

export default ListComments;
