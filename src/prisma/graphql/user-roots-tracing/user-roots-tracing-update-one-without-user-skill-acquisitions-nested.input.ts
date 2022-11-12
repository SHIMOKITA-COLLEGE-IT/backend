import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRootsTracingCreateWithoutUserSkillAcquisitionsInput } from './user-roots-tracing-create-without-user-skill-acquisitions.input';
import { Type } from 'class-transformer';
import { UserRootsTracingCreateOrConnectWithoutUserSkillAcquisitionsInput } from './user-roots-tracing-create-or-connect-without-user-skill-acquisitions.input';
import { UserRootsTracingUpsertWithoutUserSkillAcquisitionsInput } from './user-roots-tracing-upsert-without-user-skill-acquisitions.input';
import { UserRootsTracingWhereUniqueInput } from './user-roots-tracing-where-unique.input';
import { UserRootsTracingUpdateWithoutUserSkillAcquisitionsInput } from './user-roots-tracing-update-without-user-skill-acquisitions.input';

@InputType()
export class UserRootsTracingUpdateOneWithoutUserSkillAcquisitionsNestedInput {

    @Field(() => UserRootsTracingCreateWithoutUserSkillAcquisitionsInput, {nullable:true})
    @Type(() => UserRootsTracingCreateWithoutUserSkillAcquisitionsInput)
    create?: UserRootsTracingCreateWithoutUserSkillAcquisitionsInput;

    @Field(() => UserRootsTracingCreateOrConnectWithoutUserSkillAcquisitionsInput, {nullable:true})
    @Type(() => UserRootsTracingCreateOrConnectWithoutUserSkillAcquisitionsInput)
    connectOrCreate?: UserRootsTracingCreateOrConnectWithoutUserSkillAcquisitionsInput;

    @Field(() => UserRootsTracingUpsertWithoutUserSkillAcquisitionsInput, {nullable:true})
    @Type(() => UserRootsTracingUpsertWithoutUserSkillAcquisitionsInput)
    upsert?: UserRootsTracingUpsertWithoutUserSkillAcquisitionsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserRootsTracingWhereUniqueInput, {nullable:true})
    @Type(() => UserRootsTracingWhereUniqueInput)
    connect?: UserRootsTracingWhereUniqueInput;

    @Field(() => UserRootsTracingUpdateWithoutUserSkillAcquisitionsInput, {nullable:true})
    @Type(() => UserRootsTracingUpdateWithoutUserSkillAcquisitionsInput)
    update?: UserRootsTracingUpdateWithoutUserSkillAcquisitionsInput;
}
