import { DatePicker, Form, Modal } from "antd";
import moment from "moment";
import { getMeetingId } from "../../../../api/meetingApi.js";

const dateFormat = "DD/MM/YYYY HH:mm";
const disabledDate = (current) => {
	// Can not select days before today and today
	return current && current < moment().endOf("day");
};

const BookingForm = ({ title, open, onOk, onCancel }) => {
	const now = new Date();

	const [form] = Form.useForm();

	const onFinish = async ({ date }) => {
		//TODO : call api to submit booking
		// const res = await getMeetingId();
		// console.log("Call create meeting", res);
		const time = moment(date).toISOString();
		onOk(time);
	};

	const handleFinish = () => {
		form.submit();
	};

	return (
		<Modal
			title="Hẹn lịch meeting"
			open={open}
			onOk={handleFinish}
			onCancel={onCancel}
		>
			<Form
				layout="vertical"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				autoComplete="off"
				onFinish={onFinish}
				defaultValue={{
					date: moment(now, dateFormat)
				}}
				form={form}
			>
				<Form.Item
					label="Ngày :"
					name="date"
					rules={[{ required: true, message: "Không được bỏ trống" }]}
				>
					<DatePicker
						showTime={{
							defaultValue: moment("00:00:00", "HH:mm")
						}}
						disabledDate={disabledDate}
						format={dateFormat}
					/>
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default BookingForm;
