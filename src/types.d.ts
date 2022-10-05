export interface Order {
    id: string;
    area: string;
    product: string;
    quantity: number;
    brand: string;
}

export interface ProcessingResult {
    popularArray: Array<string|number>[];
    averagesArray: Array<string|number>[];
}

export interface DataAggregationResult {
    averages: Record<string, number>;
    ranks: Record<string, Record<string, number>>;
}