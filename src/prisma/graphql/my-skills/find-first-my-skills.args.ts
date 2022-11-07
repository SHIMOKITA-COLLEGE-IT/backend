import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MySkillsWhereInput } from './my-skills-where.input';
import { Type } from 'class-transformer';
import { MySkillsOrderByWithRelationInput } from './my-skills-order-by-with-relation.input';
import { MySkillsWhereUniqueInput } from './my-skills-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MySkillsScalarFieldEnum } from './my-skills-scalar-field.enum';

@ArgsType()
export class FindFirstMySkillsArgs {

    @Field(() => MySkillsWhereInput, {nullable:true})
    @Type(() => MySkillsWhereInput)
    where?: MySkillsWhereInput;

    @Field(() => [MySkillsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MySkillsOrderByWithRelationInput>;

    @Field(() => MySkillsWhereUniqueInput, {nullable:true})
    cursor?: MySkillsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MySkillsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MySkillsScalarFieldEnum>;
}
