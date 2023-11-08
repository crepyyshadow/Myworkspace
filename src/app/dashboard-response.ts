export interface DashboardResponse {
    top_cards: TopCards[];
    new_users: NewUsers[];
    recent_orders: RecentOrder[];
}

export interface TopCards {
    header: string;
    sub_header: string;
    value: number;
}

export interface NewUsers {
    id: string;
    picture: string;
    name: string;
    isActive: boolean;
    country: string;
    progress: number;
}

export interface RecentOrder {
    id: string;
    name: string;
    product: string;
    delivery_date: string;
    status: string;
    tracking_no: string;
    shipping: boolean
}