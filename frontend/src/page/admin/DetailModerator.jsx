import { Modal, Typography } from "antd";
import { useState } from "react";
const {Text} = Typography;


const DetailModeratorModal = ({onClose}) => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const closeModal = () => {
        setIsModalOpen(false);
        onClose();
    };

    return (
        <Modal open={isModalOpen} onCancel={closeModal} footer={null}
                title="Detail" 
        >
            <Text>Detail modal</Text>
        </Modal>
    );
}

export default DetailModeratorModal;