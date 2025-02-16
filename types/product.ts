export interface Category {
    id: number;
    name: string;
}

export interface Technology {
    id: number;
    name: string;
}

export interface Tag {
    id: number;
    name: string;
}

export interface Button {
    title: string;
    url: string;
    css_class: string;
}

export interface Product {
    id: number;
    name: string;
    slug: string;
    short_description: string;
    icon: string;
    feature_image: string;
    video_url: string | null;
    apis: any[]; // Adjust if API objects have a structure
    categories: Category[];
    technologies: Technology[];
    tags: Tag[];
    buttons: Button[];
}

export interface ProductsResponse {
    products: Product[];
}
