
export interface TransferFileDataType {
    base64: string,
    type: string,
    name: string,
}

export interface ConversationItem {
    role: "user" | "assistant",
    data: string | TransferFileDataType,
    isPending?: boolean,
}