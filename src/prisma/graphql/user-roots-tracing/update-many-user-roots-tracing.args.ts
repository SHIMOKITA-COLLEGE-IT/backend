import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRootsTracingUpdateManyMutationInput } from './user-roots-tracing-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UserRootsTracingWhereInput } from './user-roots-tracing-where.input';

@ArgsType()
export class UpdateManyUserRootsTracingArgs {

    @Field(() => UserRootsTracingUpdateManyMutationInput, {nullable:false})
    @Type(() => UserRootsTracingUpdateManyMutationInput)
    data!: UserRootsTracingUpdateManyMutationInput;

    @Field(() => UserRootsTracingWhereInput, {nullable:true})
    @Type(() => UserRootsTracingWhereInput)
    where?: UserRootsTracingWhereInput;
}
