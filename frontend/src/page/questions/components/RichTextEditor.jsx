import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./RichTextEditor.css";

function RichTextEditor({ value, onChange }) {
	return (
		<div style={{ backgroundColor: "#fff" }}>
			<ReactQuill theme="snow" value={value} onChange={onChange} />
		</div>
	);
}
export default RichTextEditor;
