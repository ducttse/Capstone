export const transactionTypes = [
    {
        id : "0",
        type: "Trả tiền",
    },
    {
        id: "1",
        type: "Quyên tặng"
    },
    {
        id: "2",
        type: "Rút tiền"
    },
    {
        id: "3",
        type: "Nạp tiền"
    },
    {
        id: "4",
        type: "Phí"
    },
]

export const getTransactionType = (id) => {
    let transactionType = transactionTypes.find((s) => s.id == id);
    return transactionType ? transactionType.type : "";
}