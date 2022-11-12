import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRootsTracingCreateWithoutUserSkillAcquisitionsInput } from './user-roots-tracing-create-without-user-skill-acquisitions.input';
import { Type } from 'class-transformer';
import { UserRootsTracingCreateOrConnectWithoutUserSkillAcquisitionsInput } from './user-roots-tracing-create-or-connect-without-user-skill-acquisitions.input';
import { UserRootsTracingWhereUniqueInput } from './user-roots-tracing-where-unique.input';

@InputType()
export class UserRootsTracingCreateNestedOneWithoutUserSkillAcquisitionsInput {

    @Field(() => UserRootsTracingCreateWithoutUserSkillAcquisitionsInput, {nullable:true})
    @Type(() => UserRootsTracingCreateWithoutUserSkillAcquisitionsInput)
    create?: UserRootsTracingCreateWithoutUserSkillAcquisitionsInput;

    @Field(() => UserRootsTracingCreateOrConnectWithoutUserSkillAcquisitionsInput, {nullable:true})
    @Type(() => UserRootsTracingCreateOrConnectWithoutUserSkillAcquisitionsInput)
    connectOrCreate?: UserRootsTracingCreateOrConnectWithoutUserSkillAcquisitionsInput;

    @Field(() => UserRootsTracingWhereUniqueInput, {nullable:true})
    @Type(() => UserRootsTracingWhereUniqueInput)
    connect?: UserRootsTracingWhereUniqueInput;
}
