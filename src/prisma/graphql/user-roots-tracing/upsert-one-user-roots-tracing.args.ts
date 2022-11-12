import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRootsTracingWhereUniqueInput } from './user-roots-tracing-where-unique.input';
import { Type } from 'class-transformer';
import { UserRootsTracingCreateInput } from './user-roots-tracing-create.input';
import { UserRootsTracingUpdateInput } from './user-roots-tracing-update.input';

@ArgsType()
export class UpsertOneUserRootsTracingArgs {

    @Field(() => UserRootsTracingWhereUniqueInput, {nullable:false})
    @Type(() => UserRootsTracingWhereUniqueInput)
    where!: UserRootsTracingWhereUniqueInput;

    @Field(() => UserRootsTracingCreateInput, {nullable:false})
    @Type(() => UserRootsTracingCreateInput)
    create!: UserRootsTracingCreateInput;

    @Field(() => UserRootsTracingUpdateInput, {nullable:false})
    @Type(() => UserRootsTracingUpdateInput)
    update!: UserRootsTracingUpdateInput;
}
