import { registerEnumType } from '@nestjs/graphql';

export enum MyRootsScalarFieldEnum {
    id = "id",
    profileId = "profileId",
    rootsId = "rootsId",
    from = "from",
    to = "to"
}


registerEnumType(MyRootsScalarFieldEnum, { name: 'MyRootsScalarFieldEnum', description: undefined })
