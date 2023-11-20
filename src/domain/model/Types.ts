export interface ICustomer {
    id: number;
    name: string;
    dni: string;
    email: string;
    phone: string;
}

export interface ICustomerRequest {
    name: string;
    dni: string;
    email: string;
    phone: string;
    password: string;
}

export interface IDevice {
    id: number;
    imei: number;
    brand: string;
    model: string;
}

export interface IDeviceRequest {
    imei: number;
    brand: string;
    model: string;
    ownerId: number;
}

export enum NotificationStatus {
    Pending,
    Sent,
    Read,
}

export interface INotification {
    id: number;
    message: string;
    date: Date;
    statusUpdate: NotificationStatus;
}

export interface INotificationRequest {
    message: string;
    recipientId: number;
}

export enum OrderStatus {
    Received,
    OnProcess,
    OnHold,
    Ready,
    Completed,
    Cancelled,
    Escalated
}

export interface IOrder {
    id: number;
    createdAt: Date;
    status: OrderStatus;
    description: string;
    device_id: number;
    customer_id: number;
    technician_id: number;
    support_center_id: number;
}

export interface IOrderRequest {
    description: string;
    deviceId: number;
    customerId: number;
    technicianId: number;
    supportCenterId: number;
}

export interface IRating {
    id: number;
    score: number;
    comment: string;
}

export interface IRatingRequest {
    score: number;
    comment: string;
    associatedOrderId: number;
}

export enum ReportStatus {
    Pending,
    InProgress,
    Completed
}

export interface IReport {
    id: number;
    description: string;
    status: ReportStatus;
}

export interface IReportRequest {
    description: string;
    associatedOrderId: number;
    customerId: number;
}

export interface IStatusUpdate {
    id: number;
    description: string;
    status: OrderStatus;
}

export interface IStatusUpdateRequest {
    description: string;
    associatedOrderId: number;
    technicianId: number;
}

export interface ISupportCenter {
    id: number;
    name: string;
    ruc: string;
    address: string;
}

export interface ISupportCenterRequest {
    name: string;
    ruc: string;
    address: string;
}

export interface ITechnician {
    id: number;
    name: string;
    dni: string;
}

export interface ITechnicianRequest {
    name: string;
    dni: string;
    address: string;
    password: string;
    supportCenterId: number;
}