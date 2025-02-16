import type {Testimonial} from "~/types/testimonial";
import type {Product, ProductsResponse} from "~/types/product";

export interface HomePageResponse {
    testimonials: Testimonial[]
    products: Product[],
    recent_products: Product[]

}