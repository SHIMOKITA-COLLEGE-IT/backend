import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSkillAcquisitionCreateWithoutUserRootsTracingInput } from './user-skill-acquisition-create-without-user-roots-tracing.input';
import { Type } from 'class-transformer';
import { UserSkillAcquisitionCreateOrConnectWithoutUserRootsTracingInput } from './user-skill-acquisition-create-or-connect-without-user-roots-tracing.input';
import { UserSkillAcquisitionCreateManyUserRootsTracingInputEnvelope } from './user-skill-acquisition-create-many-user-roots-tracing-input-envelope.input';
import { UserSkillAcquisitionWhereUniqueInput } from './user-skill-acquisition-where-unique.input';

@InputType()
export class UserSkillAcquisitionCreateNestedManyWithoutUserRootsTracingInput {

    @Field(() => [UserSkillAcquisitionCreateWithoutUserRootsTracingInput], {nullable:true})
    @Type(() => UserSkillAcquisitionCreateWithoutUserRootsTracingInput)
    create?: Array<UserSkillAcquisitionCreateWithoutUserRootsTracingInput>;

    @Field(() => [UserSkillAcquisitionCreateOrConnectWithoutUserRootsTracingInput], {nullable:true})
    @Type(() => UserSkillAcquisitionCreateOrConnectWithoutUserRootsTracingInput)
    connectOrCreate?: Array<UserSkillAcquisitionCreateOrConnectWithoutUserRootsTracingInput>;

    @Field(() => UserSkillAcquisitionCreateManyUserRootsTracingInputEnvelope, {nullable:true})
    @Type(() => UserSkillAcquisitionCreateManyUserRootsTracingInputEnvelope)
    createMany?: UserSkillAcquisitionCreateManyUserRootsTracingInputEnvelope;

    @Field(() => [UserSkillAcquisitionWhereUniqueInput], {nullable:true})
    @Type(() => UserSkillAcquisitionWhereUniqueInput)
    connect?: Array<UserSkillAcquisitionWhereUniqueInput>;
}
