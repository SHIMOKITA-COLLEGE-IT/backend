import { registerEnumType } from '@nestjs/graphql';

export enum UserRootsTracingScalarFieldEnum {
    userId = "userId",
    rootsId = "rootsId",
    from = "from",
    to = "to"
}


registerEnumType(UserRootsTracingScalarFieldEnum, { name: 'UserRootsTracingScalarFieldEnum', description: undefined })
