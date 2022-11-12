import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSkillAcquisitionWhereUniqueInput } from './user-skill-acquisition-where-unique.input';
import { Type } from 'class-transformer';
import { UserSkillAcquisitionCreateWithoutUserInput } from './user-skill-acquisition-create-without-user.input';

@InputType()
export class UserSkillAcquisitionCreateOrConnectWithoutUserInput {

    @Field(() => UserSkillAcquisitionWhereUniqueInput, {nullable:false})
    @Type(() => UserSkillAcquisitionWhereUniqueInput)
    where!: UserSkillAcquisitionWhereUniqueInput;

    @Field(() => UserSkillAcquisitionCreateWithoutUserInput, {nullable:false})
    @Type(() => UserSkillAcquisitionCreateWithoutUserInput)
    create!: UserSkillAcquisitionCreateWithoutUserInput;
}
