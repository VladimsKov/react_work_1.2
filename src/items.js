export default class Items {
    constructor(brand, title, description, descriptionFull, price, currency) {
        this.brand = brand;
        this.title = title;
        this.description = description;
        this.descriptionFull = descriptionFull;
        this.price = price;
        this.currency = currency;
    }
}

const items = [];
items[1] = new Items(
    'Tiger of Sweden',
    'Leonard coat',
    'Minimalistic coat in cotton-blend',
    'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    399,
    '£'
    );
    
    items[2] = new Items(
        'Bear of Russia',
        'Leo coat',
        'Warm coat in cotton-blend',
        'Men\'s maximalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent.',
        500,
        '£'
        );
        
        export {items};