export interface Phone {
  country_code: number;
  number: number;
}

export interface ResidentialAddress {
  street_address: string;
  city: string;
  country: string;
  province: string;
}
export interface UserType {
  id: string;
  wallet_address: string;
  profile_photo: string;
  display_name: string;
  email: string;
  telegram_user_link: string;
  phone: Phone;
  residential_address: ResidentialAddress;
  is_signup_completed: boolean;
}

export interface ProjectInvoice {
  id: string;
  request_network_id: number;
  request_network_url: string;
  status: string;
  amount: string;
  currency: string;
  user_id: string;
  due_date: string | null;
  interval_duration: string;
  flow_rate_per_second: string;
  payer_wallet: string;
  created_at: string;
}

export interface ProjectType {
  id: string;
  name: string;
  description: string;
  invoice: string;
  role: string;
  client: string;
  worker: string;
  client_rating: number | null;
  worker_rating: number | null;
  due_date: string;
  status: Status;
  project_invoice: ProjectInvoice;
}

export type Status =
  | 'complete'
  | 'dispute'
  | 'pending'
  | 'rejected'
  | 'in progress';
