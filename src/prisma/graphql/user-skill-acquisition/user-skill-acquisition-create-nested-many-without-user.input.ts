import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSkillAcquisitionCreateWithoutUserInput } from './user-skill-acquisition-create-without-user.input';
import { Type } from 'class-transformer';
import { UserSkillAcquisitionCreateOrConnectWithoutUserInput } from './user-skill-acquisition-create-or-connect-without-user.input';
import { UserSkillAcquisitionCreateManyUserInputEnvelope } from './user-skill-acquisition-create-many-user-input-envelope.input';
import { UserSkillAcquisitionWhereUniqueInput } from './user-skill-acquisition-where-unique.input';

@InputType()
export class UserSkillAcquisitionCreateNestedManyWithoutUserInput {

    @Field(() => [UserSkillAcquisitionCreateWithoutUserInput], {nullable:true})
    @Type(() => UserSkillAcquisitionCreateWithoutUserInput)
    create?: Array<UserSkillAcquisitionCreateWithoutUserInput>;

    @Field(() => [UserSkillAcquisitionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserSkillAcquisitionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserSkillAcquisitionCreateOrConnectWithoutUserInput>;

    @Field(() => UserSkillAcquisitionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserSkillAcquisitionCreateManyUserInputEnvelope)
    createMany?: UserSkillAcquisitionCreateManyUserInputEnvelope;

    @Field(() => [UserSkillAcquisitionWhereUniqueInput], {nullable:true})
    @Type(() => UserSkillAcquisitionWhereUniqueInput)
    connect?: Array<UserSkillAcquisitionWhereUniqueInput>;
}
