import {ReviewModel} from "./ReviewModel";
import {MetaModel} from "./MetaModel";

export interface ProductModel {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
        width: number;
        height: number;
        depth: number;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: ReviewModel[];
    meta: MetaModel[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    thumbnail: string;
}