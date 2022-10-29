import { Comment, List } from "antd";
import { Interweave } from "interweave";
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
	const { content, ...rest } = { ...data };
	return <Comment {...rest} content={<Interweave content={content} />} />;
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
