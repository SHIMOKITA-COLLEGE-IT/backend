import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSkillAcquisitionCreateWithoutSkillInput } from './user-skill-acquisition-create-without-skill.input';
import { Type } from 'class-transformer';
import { UserSkillAcquisitionCreateOrConnectWithoutSkillInput } from './user-skill-acquisition-create-or-connect-without-skill.input';
import { UserSkillAcquisitionUpsertWithWhereUniqueWithoutSkillInput } from './user-skill-acquisition-upsert-with-where-unique-without-skill.input';
import { UserSkillAcquisitionCreateManySkillInputEnvelope } from './user-skill-acquisition-create-many-skill-input-envelope.input';
import { UserSkillAcquisitionWhereUniqueInput } from './user-skill-acquisition-where-unique.input';
import { UserSkillAcquisitionUpdateWithWhereUniqueWithoutSkillInput } from './user-skill-acquisition-update-with-where-unique-without-skill.input';
import { UserSkillAcquisitionUpdateManyWithWhereWithoutSkillInput } from './user-skill-acquisition-update-many-with-where-without-skill.input';
import { UserSkillAcquisitionScalarWhereInput } from './user-skill-acquisition-scalar-where.input';

@InputType()
export class UserSkillAcquisitionUncheckedUpdateManyWithoutSkillNestedInput {

    @Field(() => [UserSkillAcquisitionCreateWithoutSkillInput], {nullable:true})
    @Type(() => UserSkillAcquisitionCreateWithoutSkillInput)
    create?: Array<UserSkillAcquisitionCreateWithoutSkillInput>;

    @Field(() => [UserSkillAcquisitionCreateOrConnectWithoutSkillInput], {nullable:true})
    @Type(() => UserSkillAcquisitionCreateOrConnectWithoutSkillInput)
    connectOrCreate?: Array<UserSkillAcquisitionCreateOrConnectWithoutSkillInput>;

    @Field(() => [UserSkillAcquisitionUpsertWithWhereUniqueWithoutSkillInput], {nullable:true})
    @Type(() => UserSkillAcquisitionUpsertWithWhereUniqueWithoutSkillInput)
    upsert?: Array<UserSkillAcquisitionUpsertWithWhereUniqueWithoutSkillInput>;

    @Field(() => UserSkillAcquisitionCreateManySkillInputEnvelope, {nullable:true})
    @Type(() => UserSkillAcquisitionCreateManySkillInputEnvelope)
    createMany?: UserSkillAcquisitionCreateManySkillInputEnvelope;

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

    @Field(() => [UserSkillAcquisitionUpdateWithWhereUniqueWithoutSkillInput], {nullable:true})
    @Type(() => UserSkillAcquisitionUpdateWithWhereUniqueWithoutSkillInput)
    update?: Array<UserSkillAcquisitionUpdateWithWhereUniqueWithoutSkillInput>;

    @Field(() => [UserSkillAcquisitionUpdateManyWithWhereWithoutSkillInput], {nullable:true})
    @Type(() => UserSkillAcquisitionUpdateManyWithWhereWithoutSkillInput)
    updateMany?: Array<UserSkillAcquisitionUpdateManyWithWhereWithoutSkillInput>;

    @Field(() => [UserSkillAcquisitionScalarWhereInput], {nullable:true})
    @Type(() => UserSkillAcquisitionScalarWhereInput)
    deleteMany?: Array<UserSkillAcquisitionScalarWhereInput>;
}
