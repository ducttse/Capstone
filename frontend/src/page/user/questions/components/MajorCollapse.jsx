import { Menu } from "antd";
import { isArray } from "lodash";
import React from "react";

function getItem(key, label, icon, children, type) {
	return {
		key,
		icon,
		children,
		label,
		type
	};
}

const items = (arr) => {
	if (isArray(arr)) {
		return arr.map((m) => {
			const subjects = m.subjects.map((s) => {
				return getItem(`subject#${s.id}`, s.name);
			});
			return getItem(`major#${m.id}`, m.name, null, subjects);
		});
	} else return [];
};

const MajorCollapse = ({ majors }) => {
	const onClick = (e) => {
		console.log("click ", e.key);
	};

	return (
		<>
			<Menu
				onClick={onClick}
				style={{
					width: "100%",
					border: "1px solid",
					borderColor: "#d3d3d3"
				}}
				defaultSelectedKeys={["1"]}
				defaultOpenKeys={["sub1"]}
				mode="inline"
				items={items(majors)}
			/>
		</>
	);
};

export default MajorCollapse;
