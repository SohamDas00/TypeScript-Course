export declare const ProductCard: ({ id, name, price, category }: typeProduct) => (...: any[]) => any;
type typeProfileCard = {
    name: string;
    age: number;
    email: string;
    image?: string;
};
export declare const ProfileCard: ({ name, age, email, image }: typeProfileCard) => (...: any[]) => any;
export {};
