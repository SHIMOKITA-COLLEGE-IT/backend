import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRootsTracingWhereInput } from './user-roots-tracing-where.input';

@InputType()
export class UserRootsTracingRelationFilter {

    @Field(() => UserRootsTracingWhereInput, {nullable:true})
    is?: UserRootsTracingWhereInput;

    @Field(() => UserRootsTracingWhereInput, {nullable:true})
    isNot?: UserRootsTracingWhereInput;
}
