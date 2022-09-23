import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import React from "react";

const props = {
	name: "file",
	action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
	headers: {
		authorization: "authorization-text"
	},

	onChange(info) {
		if (info.file.status !== "uploading") {
			console.log(info.file, info.fileList);
		}
		if (info.file.status === "done") {
			message.success(`${info.file.name} file uploaded successfully`);
		} else if (info.file.status === "error") {
			message.error(`${info.file.name} file upload failed.`);
		}
	}
};

const UploadFileButton = () => (
	<Upload {...props}>
		<Button icon={<UploadOutlined />}>Đính kèm ảnh</Button>
	</Upload>
);

export default UploadFileButton;
