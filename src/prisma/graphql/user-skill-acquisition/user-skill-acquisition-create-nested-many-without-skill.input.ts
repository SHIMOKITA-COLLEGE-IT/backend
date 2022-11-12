import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSkillAcquisitionCreateWithoutSkillInput } from './user-skill-acquisition-create-without-skill.input';
import { Type } from 'class-transformer';
import { UserSkillAcquisitionCreateOrConnectWithoutSkillInput } from './user-skill-acquisition-create-or-connect-without-skill.input';
import { UserSkillAcquisitionCreateManySkillInputEnvelope } from './user-skill-acquisition-create-many-skill-input-envelope.input';
import { UserSkillAcquisitionWhereUniqueInput } from './user-skill-acquisition-where-unique.input';

@InputType()
export class UserSkillAcquisitionCreateNestedManyWithoutSkillInput {

    @Field(() => [UserSkillAcquisitionCreateWithoutSkillInput], {nullable:true})
    @Type(() => UserSkillAcquisitionCreateWithoutSkillInput)
    create?: Array<UserSkillAcquisitionCreateWithoutSkillInput>;

    @Field(() => [UserSkillAcquisitionCreateOrConnectWithoutSkillInput], {nullable:true})
    @Type(() => UserSkillAcquisitionCreateOrConnectWithoutSkillInput)
    connectOrCreate?: Array<UserSkillAcquisitionCreateOrConnectWithoutSkillInput>;

    @Field(() => UserSkillAcquisitionCreateManySkillInputEnvelope, {nullable:true})
    @Type(() => UserSkillAcquisitionCreateManySkillInputEnvelope)
    createMany?: UserSkillAcquisitionCreateManySkillInputEnvelope;

    @Field(() => [UserSkillAcquisitionWhereUniqueInput], {nullable:true})
    @Type(() => UserSkillAcquisitionWhereUniqueInput)
    connect?: Array<UserSkillAcquisitionWhereUniqueInput>;
}
