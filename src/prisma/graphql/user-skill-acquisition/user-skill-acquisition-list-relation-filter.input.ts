import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSkillAcquisitionWhereInput } from './user-skill-acquisition-where.input';

@InputType()
export class UserSkillAcquisitionListRelationFilter {

    @Field(() => UserSkillAcquisitionWhereInput, {nullable:true})
    every?: UserSkillAcquisitionWhereInput;

    @Field(() => UserSkillAcquisitionWhereInput, {nullable:true})
    some?: UserSkillAcquisitionWhereInput;

    @Field(() => UserSkillAcquisitionWhereInput, {nullable:true})
    none?: UserSkillAcquisitionWhereInput;
}
