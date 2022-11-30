import { Comment, List } from "antd";
import { Interweave } from "interweave";
import { Link } from "react-router-dom";
import { vnMoment } from "../../../../utils/vnMoment.js";
import dummyAva from "./ava.jpeg";

const formatRawData = (data) => {
	return {
		id: data.id,
		author: data.fullName,
		avatar: dummyAva,
		content: data.content,
		datetime: vnMoment(data.createdTime).format("LLL")
	};
};

const CustomeComment = ({ data }) => {
	const { content,author,id, ...rest } = { ...data };
	const path = `/profile/${id}`;
	return <Comment {...rest} author={<Link to={path}>{author}</Link>} content={<Interweave content={content} />} />;
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
