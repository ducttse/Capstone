export const statuses = [
    {
        id : "0",
        state: "Chưa kích hoạt",
    },
    {
        id: "1",
        state: "Đang hoạt động"
    },
    {
        id: "2",
        state: "Ngừng hoạt động"
    }
]

export const getStatus = (id) => {
    let status = statuses.find((s) => s.id == id);
    return status ? status.state : "";
}


export const transactionStatus = [
    {
        id : "0",
        state: "Đang chờ xử lý",
    },
    {
        id: "1",
        state: "Thành công"
    },
    {
        id: "2",
        state: "Thất bại"
    }
]

export const getTransactionStatus = (id) => {
    let status = transactionStatus.find((s) => s.id == id);
    return status ? status.state : "";
}