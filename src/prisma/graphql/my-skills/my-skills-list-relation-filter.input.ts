import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MySkillsWhereInput } from './my-skills-where.input';

@InputType()
export class MySkillsListRelationFilter {

    @Field(() => MySkillsWhereInput, {nullable:true})
    every?: MySkillsWhereInput;

    @Field(() => MySkillsWhereInput, {nullable:true})
    some?: MySkillsWhereInput;

    @Field(() => MySkillsWhereInput, {nullable:true})
    none?: MySkillsWhereInput;
}
