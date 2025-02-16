export interface Testimonial {
    id: number
    client_photo: string | null
    client_name: string
    client_occupation: string
    ratting: number
    review: string
    active: boolean
    show_in_home_page: boolean
}

export interface TestimonialsResponse {
    testimonials: Testimonial[]
}