import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRootsTracingScalarWhereInput } from './user-roots-tracing-scalar-where.input';
import { Type } from 'class-transformer';
import { UserRootsTracingUpdateManyMutationInput } from './user-roots-tracing-update-many-mutation.input';

@InputType()
export class UserRootsTracingUpdateManyWithWhereWithoutUserInput {

    @Field(() => UserRootsTracingScalarWhereInput, {nullable:false})
    @Type(() => UserRootsTracingScalarWhereInput)
    where!: UserRootsTracingScalarWhereInput;

    @Field(() => UserRootsTracingUpdateManyMutationInput, {nullable:false})
    @Type(() => UserRootsTracingUpdateManyMutationInput)
    data!: UserRootsTracingUpdateManyMutationInput;
}
