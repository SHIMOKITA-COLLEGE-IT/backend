import { registerEnumType } from '@nestjs/graphql';

export enum GenerationType {
    PROGRAM = "PROGRAM",
    HOUSE = "HOUSE",
    HOME = "HOME"
}


registerEnumType(GenerationType, { name: 'GenerationType', description: undefined })
