import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRootsTracingCreateWithoutRootsInput } from './user-roots-tracing-create-without-roots.input';
import { Type } from 'class-transformer';
import { UserRootsTracingCreateOrConnectWithoutRootsInput } from './user-roots-tracing-create-or-connect-without-roots.input';
import { UserRootsTracingUpsertWithWhereUniqueWithoutRootsInput } from './user-roots-tracing-upsert-with-where-unique-without-roots.input';
import { UserRootsTracingCreateManyRootsInputEnvelope } from './user-roots-tracing-create-many-roots-input-envelope.input';
import { UserRootsTracingWhereUniqueInput } from './user-roots-tracing-where-unique.input';
import { UserRootsTracingUpdateWithWhereUniqueWithoutRootsInput } from './user-roots-tracing-update-with-where-unique-without-roots.input';
import { UserRootsTracingUpdateManyWithWhereWithoutRootsInput } from './user-roots-tracing-update-many-with-where-without-roots.input';
import { UserRootsTracingScalarWhereInput } from './user-roots-tracing-scalar-where.input';

@InputType()
export class UserRootsTracingUncheckedUpdateManyWithoutRootsNestedInput {

    @Field(() => [UserRootsTracingCreateWithoutRootsInput], {nullable:true})
    @Type(() => UserRootsTracingCreateWithoutRootsInput)
    create?: Array<UserRootsTracingCreateWithoutRootsInput>;

    @Field(() => [UserRootsTracingCreateOrConnectWithoutRootsInput], {nullable:true})
    @Type(() => UserRootsTracingCreateOrConnectWithoutRootsInput)
    connectOrCreate?: Array<UserRootsTracingCreateOrConnectWithoutRootsInput>;

    @Field(() => [UserRootsTracingUpsertWithWhereUniqueWithoutRootsInput], {nullable:true})
    @Type(() => UserRootsTracingUpsertWithWhereUniqueWithoutRootsInput)
    upsert?: Array<UserRootsTracingUpsertWithWhereUniqueWithoutRootsInput>;

    @Field(() => UserRootsTracingCreateManyRootsInputEnvelope, {nullable:true})
    @Type(() => UserRootsTracingCreateManyRootsInputEnvelope)
    createMany?: UserRootsTracingCreateManyRootsInputEnvelope;

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

    @Field(() => [UserRootsTracingUpdateWithWhereUniqueWithoutRootsInput], {nullable:true})
    @Type(() => UserRootsTracingUpdateWithWhereUniqueWithoutRootsInput)
    update?: Array<UserRootsTracingUpdateWithWhereUniqueWithoutRootsInput>;

    @Field(() => [UserRootsTracingUpdateManyWithWhereWithoutRootsInput], {nullable:true})
    @Type(() => UserRootsTracingUpdateManyWithWhereWithoutRootsInput)
    updateMany?: Array<UserRootsTracingUpdateManyWithWhereWithoutRootsInput>;

    @Field(() => [UserRootsTracingScalarWhereInput], {nullable:true})
    @Type(() => UserRootsTracingScalarWhereInput)
    deleteMany?: Array<UserRootsTracingScalarWhereInput>;
}
