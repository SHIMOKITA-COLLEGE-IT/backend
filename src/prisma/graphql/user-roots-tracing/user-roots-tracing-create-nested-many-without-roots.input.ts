import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRootsTracingCreateWithoutRootsInput } from './user-roots-tracing-create-without-roots.input';
import { Type } from 'class-transformer';
import { UserRootsTracingCreateOrConnectWithoutRootsInput } from './user-roots-tracing-create-or-connect-without-roots.input';
import { UserRootsTracingCreateManyRootsInputEnvelope } from './user-roots-tracing-create-many-roots-input-envelope.input';
import { UserRootsTracingWhereUniqueInput } from './user-roots-tracing-where-unique.input';

@InputType()
export class UserRootsTracingCreateNestedManyWithoutRootsInput {

    @Field(() => [UserRootsTracingCreateWithoutRootsInput], {nullable:true})
    @Type(() => UserRootsTracingCreateWithoutRootsInput)
    create?: Array<UserRootsTracingCreateWithoutRootsInput>;

    @Field(() => [UserRootsTracingCreateOrConnectWithoutRootsInput], {nullable:true})
    @Type(() => UserRootsTracingCreateOrConnectWithoutRootsInput)
    connectOrCreate?: Array<UserRootsTracingCreateOrConnectWithoutRootsInput>;

    @Field(() => UserRootsTracingCreateManyRootsInputEnvelope, {nullable:true})
    @Type(() => UserRootsTracingCreateManyRootsInputEnvelope)
    createMany?: UserRootsTracingCreateManyRootsInputEnvelope;

    @Field(() => [UserRootsTracingWhereUniqueInput], {nullable:true})
    @Type(() => UserRootsTracingWhereUniqueInput)
    connect?: Array<UserRootsTracingWhereUniqueInput>;
}
