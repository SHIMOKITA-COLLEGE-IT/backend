import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRootsTracingWhereInput } from './user-roots-tracing-where.input';

@InputType()
export class UserRootsTracingListRelationFilter {

    @Field(() => UserRootsTracingWhereInput, {nullable:true})
    every?: UserRootsTracingWhereInput;

    @Field(() => UserRootsTracingWhereInput, {nullable:true})
    some?: UserRootsTracingWhereInput;

    @Field(() => UserRootsTracingWhereInput, {nullable:true})
    none?: UserRootsTracingWhereInput;
}
