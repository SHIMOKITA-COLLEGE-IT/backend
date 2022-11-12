import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRootsTracingUpdateInput } from './user-roots-tracing-update.input';
import { Type } from 'class-transformer';
import { UserRootsTracingWhereUniqueInput } from './user-roots-tracing-where-unique.input';

@ArgsType()
export class UpdateOneUserRootsTracingArgs {

    @Field(() => UserRootsTracingUpdateInput, {nullable:false})
    @Type(() => UserRootsTracingUpdateInput)
    data!: UserRootsTracingUpdateInput;

    @Field(() => UserRootsTracingWhereUniqueInput, {nullable:false})
    @Type(() => UserRootsTracingWhereUniqueInput)
    where!: UserRootsTracingWhereUniqueInput;
}
