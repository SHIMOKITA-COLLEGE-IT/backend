import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRootsTracingCreateWithoutUserInput } from './user-roots-tracing-create-without-user.input';
import { Type } from 'class-transformer';
import { UserRootsTracingCreateOrConnectWithoutUserInput } from './user-roots-tracing-create-or-connect-without-user.input';
import { UserRootsTracingCreateManyUserInputEnvelope } from './user-roots-tracing-create-many-user-input-envelope.input';
import { UserRootsTracingWhereUniqueInput } from './user-roots-tracing-where-unique.input';

@InputType()
export class UserRootsTracingUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [UserRootsTracingCreateWithoutUserInput], {nullable:true})
    @Type(() => UserRootsTracingCreateWithoutUserInput)
    create?: Array<UserRootsTracingCreateWithoutUserInput>;

    @Field(() => [UserRootsTracingCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserRootsTracingCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserRootsTracingCreateOrConnectWithoutUserInput>;

    @Field(() => UserRootsTracingCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserRootsTracingCreateManyUserInputEnvelope)
    createMany?: UserRootsTracingCreateManyUserInputEnvelope;

    @Field(() => [UserRootsTracingWhereUniqueInput], {nullable:true})
    @Type(() => UserRootsTracingWhereUniqueInput)
    connect?: Array<UserRootsTracingWhereUniqueInput>;
}
