import { Modal, Typography } from "antd";
import { useState } from "react";
const {Text} = Typography;

const DeleteModeratorModal = ({onClose}) => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const closeModal = () => {
        setIsModalOpen(false);
        onClose();
    };

    return (
        <Modal open={isModalOpen} onCancel={closeModal}
                title="Xóa nhân viên?" 
        >
            <Text>Bạn có chắc muốn xóa nhân viên này.</Text>
        </Modal>
    );
}

export default DeleteModeratorModal;