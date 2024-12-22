export interface CardProps {
    title: string;
    description: string;
}

export interface ButtonProps {
    label: string;
    onClick: () => void;
}

interface Address {
    state: string;
    city: string;
    country: string;
}

interface Offers {
    bed: string;
    shower: string;
    occupants: string;
}

export interface PropertyProps {
    name: string;
    address: Address;
    rating: number;
    category: string[];
    price: number;
    offers: Offers;
    image: string;
    discount: string;
}
