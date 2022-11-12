import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRootsTracingCreateWithoutUserInput } from './user-roots-tracing-create-without-user.input';
import { Type } from 'class-transformer';
import { UserRootsTracingCreateOrConnectWithoutUserInput } from './user-roots-tracing-create-or-connect-without-user.input';
import { UserRootsTracingUpsertWithWhereUniqueWithoutUserInput } from './user-roots-tracing-upsert-with-where-unique-without-user.input';
import { UserRootsTracingCreateManyUserInputEnvelope } from './user-roots-tracing-create-many-user-input-envelope.input';
import { UserRootsTracingWhereUniqueInput } from './user-roots-tracing-where-unique.input';
import { UserRootsTracingUpdateWithWhereUniqueWithoutUserInput } from './user-roots-tracing-update-with-where-unique-without-user.input';
import { UserRootsTracingUpdateManyWithWhereWithoutUserInput } from './user-roots-tracing-update-many-with-where-without-user.input';
import { UserRootsTracingScalarWhereInput } from './user-roots-tracing-scalar-where.input';

@InputType()
export class UserRootsTracingUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [UserRootsTracingCreateWithoutUserInput], {nullable:true})
    @Type(() => UserRootsTracingCreateWithoutUserInput)
    create?: Array<UserRootsTracingCreateWithoutUserInput>;

    @Field(() => [UserRootsTracingCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserRootsTracingCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserRootsTracingCreateOrConnectWithoutUserInput>;

    @Field(() => [UserRootsTracingUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserRootsTracingUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<UserRootsTracingUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => UserRootsTracingCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserRootsTracingCreateManyUserInputEnvelope)
    createMany?: UserRootsTracingCreateManyUserInputEnvelope;

    @Field(() => [UserRootsTracingWhereUniqueInput], {nullable:true})
    @Type(() => UserRootsTracingWhereUniqueInput)
    set?: Array<UserRootsTracingWhereUniqueInput>;

    @Field(() => [UserRootsTracingWhereUniqueInput], {nullable:true})
    @Type(() => UserRootsTracingWhereUniqueInput)
    disconnect?: Array<UserRootsTracingWhereUniqueInput>;

    @Field(() => [UserRootsTracingWhereUniqueInput], {nullable:true})
    @Type(() => UserRootsTracingWhereUniqueInput)
    delete?: Array<UserRootsTracingWhereUniqueInput>;

    @Field(() => [UserRootsTracingWhereUniqueInput], {nullable:true})
    @Type(() => UserRootsTracingWhereUniqueInput)
    connect?: Array<UserRootsTracingWhereUniqueInput>;

    @Field(() => [UserRootsTracingUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserRootsTracingUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<UserRootsTracingUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [UserRootsTracingUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => UserRootsTracingUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<UserRootsTracingUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [UserRootsTracingScalarWhereInput], {nullable:true})
    @Type(() => UserRootsTracingScalarWhereInput)
    deleteMany?: Array<UserRootsTracingScalarWhereInput>;
}
