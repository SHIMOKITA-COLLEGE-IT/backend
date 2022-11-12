import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSkillAcquisitionCreateWithoutUserRootsTracingInput } from './user-skill-acquisition-create-without-user-roots-tracing.input';
import { Type } from 'class-transformer';
import { UserSkillAcquisitionCreateOrConnectWithoutUserRootsTracingInput } from './user-skill-acquisition-create-or-connect-without-user-roots-tracing.input';
import { UserSkillAcquisitionUpsertWithWhereUniqueWithoutUserRootsTracingInput } from './user-skill-acquisition-upsert-with-where-unique-without-user-roots-tracing.input';
import { UserSkillAcquisitionCreateManyUserRootsTracingInputEnvelope } from './user-skill-acquisition-create-many-user-roots-tracing-input-envelope.input';
import { UserSkillAcquisitionWhereUniqueInput } from './user-skill-acquisition-where-unique.input';
import { UserSkillAcquisitionUpdateWithWhereUniqueWithoutUserRootsTracingInput } from './user-skill-acquisition-update-with-where-unique-without-user-roots-tracing.input';
import { UserSkillAcquisitionUpdateManyWithWhereWithoutUserRootsTracingInput } from './user-skill-acquisition-update-many-with-where-without-user-roots-tracing.input';
import { UserSkillAcquisitionScalarWhereInput } from './user-skill-acquisition-scalar-where.input';

@InputType()
export class UserSkillAcquisitionUncheckedUpdateManyWithoutUserRootsTracingNestedInput {

    @Field(() => [UserSkillAcquisitionCreateWithoutUserRootsTracingInput], {nullable:true})
    @Type(() => UserSkillAcquisitionCreateWithoutUserRootsTracingInput)
    create?: Array<UserSkillAcquisitionCreateWithoutUserRootsTracingInput>;

    @Field(() => [UserSkillAcquisitionCreateOrConnectWithoutUserRootsTracingInput], {nullable:true})
    @Type(() => UserSkillAcquisitionCreateOrConnectWithoutUserRootsTracingInput)
    connectOrCreate?: Array<UserSkillAcquisitionCreateOrConnectWithoutUserRootsTracingInput>;

    @Field(() => [UserSkillAcquisitionUpsertWithWhereUniqueWithoutUserRootsTracingInput], {nullable:true})
    @Type(() => UserSkillAcquisitionUpsertWithWhereUniqueWithoutUserRootsTracingInput)
    upsert?: Array<UserSkillAcquisitionUpsertWithWhereUniqueWithoutUserRootsTracingInput>;

    @Field(() => UserSkillAcquisitionCreateManyUserRootsTracingInputEnvelope, {nullable:true})
    @Type(() => UserSkillAcquisitionCreateManyUserRootsTracingInputEnvelope)
    createMany?: UserSkillAcquisitionCreateManyUserRootsTracingInputEnvelope;

    @Field(() => [UserSkillAcquisitionWhereUniqueInput], {nullable:true})
    @Type(() => UserSkillAcquisitionWhereUniqueInput)
    set?: Array<UserSkillAcquisitionWhereUniqueInput>;

    @Field(() => [UserSkillAcquisitionWhereUniqueInput], {nullable:true})
    @Type(() => UserSkillAcquisitionWhereUniqueInput)
    disconnect?: Array<UserSkillAcquisitionWhereUniqueInput>;

    @Field(() => [UserSkillAcquisitionWhereUniqueInput], {nullable:true})
    @Type(() => UserSkillAcquisitionWhereUniqueInput)
    delete?: Array<UserSkillAcquisitionWhereUniqueInput>;

    @Field(() => [UserSkillAcquisitionWhereUniqueInput], {nullable:true})
    @Type(() => UserSkillAcquisitionWhereUniqueInput)
    connect?: Array<UserSkillAcquisitionWhereUniqueInput>;

    @Field(() => [UserSkillAcquisitionUpdateWithWhereUniqueWithoutUserRootsTracingInput], {nullable:true})
    @Type(() => UserSkillAcquisitionUpdateWithWhereUniqueWithoutUserRootsTracingInput)
    update?: Array<UserSkillAcquisitionUpdateWithWhereUniqueWithoutUserRootsTracingInput>;

    @Field(() => [UserSkillAcquisitionUpdateManyWithWhereWithoutUserRootsTracingInput], {nullable:true})
    @Type(() => UserSkillAcquisitionUpdateManyWithWhereWithoutUserRootsTracingInput)
    updateMany?: Array<UserSkillAcquisitionUpdateManyWithWhereWithoutUserRootsTracingInput>;

    @Field(() => [UserSkillAcquisitionScalarWhereInput], {nullable:true})
    @Type(() => UserSkillAcquisitionScalarWhereInput)
    deleteMany?: Array<UserSkillAcquisitionScalarWhereInput>;
}
