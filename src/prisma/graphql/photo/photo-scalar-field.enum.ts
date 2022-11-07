import { registerEnumType } from '@nestjs/graphql';

export enum PhotoScalarFieldEnum {
    id = "id",
    imageUrl = "imageUrl",
    alt = "alt",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PhotoScalarFieldEnum, { name: 'PhotoScalarFieldEnum', description: undefined })
