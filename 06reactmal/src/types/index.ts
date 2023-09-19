import { User } from "firebase/auth";

export interface AuthState {
  user: User | null;
  error: string | null;
  loading: boolean;
}

export interface item {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: rating;
  title: string;
}
interface rating {
  rate: number;
  count: number;
}
