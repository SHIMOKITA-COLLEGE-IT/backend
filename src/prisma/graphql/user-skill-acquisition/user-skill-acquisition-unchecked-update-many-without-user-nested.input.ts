import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSkillAcquisitionCreateWithoutUserInput } from './user-skill-acquisition-create-without-user.input';
import { Type } from 'class-transformer';
import { UserSkillAcquisitionCreateOrConnectWithoutUserInput } from './user-skill-acquisition-create-or-connect-without-user.input';
import { UserSkillAcquisitionUpsertWithWhereUniqueWithoutUserInput } from './user-skill-acquisition-upsert-with-where-unique-without-user.input';
import { UserSkillAcquisitionCreateManyUserInputEnvelope } from './user-skill-acquisition-create-many-user-input-envelope.input';
import { UserSkillAcquisitionWhereUniqueInput } from './user-skill-acquisition-where-unique.input';
import { UserSkillAcquisitionUpdateWithWhereUniqueWithoutUserInput } from './user-skill-acquisition-update-with-where-unique-without-user.input';
import { UserSkillAcquisitionUpdateManyWithWhereWithoutUserInput } from './user-skill-acquisition-update-many-with-where-without-user.input';
import { UserSkillAcquisitionScalarWhereInput } from './user-skill-acquisition-scalar-where.input';

@InputType()
export class UserSkillAcquisitionUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [UserSkillAcquisitionCreateWithoutUserInput], {nullable:true})
    @Type(() => UserSkillAcquisitionCreateWithoutUserInput)
    create?: Array<UserSkillAcquisitionCreateWithoutUserInput>;

    @Field(() => [UserSkillAcquisitionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserSkillAcquisitionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserSkillAcquisitionCreateOrConnectWithoutUserInput>;

    @Field(() => [UserSkillAcquisitionUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserSkillAcquisitionUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<UserSkillAcquisitionUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => UserSkillAcquisitionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserSkillAcquisitionCreateManyUserInputEnvelope)
    createMany?: UserSkillAcquisitionCreateManyUserInputEnvelope;

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

    @Field(() => [UserSkillAcquisitionUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserSkillAcquisitionUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<UserSkillAcquisitionUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [UserSkillAcquisitionUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => UserSkillAcquisitionUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<UserSkillAcquisitionUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [UserSkillAcquisitionScalarWhereInput], {nullable:true})
    @Type(() => UserSkillAcquisitionScalarWhereInput)
    deleteMany?: Array<UserSkillAcquisitionScalarWhereInput>;
}
