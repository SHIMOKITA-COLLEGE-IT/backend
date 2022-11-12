import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRootsTracingWhereInput } from './user-roots-tracing-where.input';
import { Type } from 'class-transformer';
import { UserRootsTracingOrderByWithRelationInput } from './user-roots-tracing-order-by-with-relation.input';
import { UserRootsTracingWhereUniqueInput } from './user-roots-tracing-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserRootsTracingScalarFieldEnum } from './user-roots-tracing-scalar-field.enum';

@ArgsType()
export class FindManyUserRootsTracingArgs {

    @Field(() => UserRootsTracingWhereInput, {nullable:true})
    @Type(() => UserRootsTracingWhereInput)
    where?: UserRootsTracingWhereInput;

    @Field(() => [UserRootsTracingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserRootsTracingOrderByWithRelationInput>;

    @Field(() => UserRootsTracingWhereUniqueInput, {nullable:true})
    cursor?: UserRootsTracingWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UserRootsTracingScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserRootsTracingScalarFieldEnum>;
}
