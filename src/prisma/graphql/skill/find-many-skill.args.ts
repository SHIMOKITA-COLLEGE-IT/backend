import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SkillWhereInput } from './skill-where.input';
import { Type } from 'class-transformer';
import { SkillOrderByWithRelationInput } from './skill-order-by-with-relation.input';
import { SkillWhereUniqueInput } from './skill-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SkillScalarFieldEnum } from './skill-scalar-field.enum';

@ArgsType()
export class FindManySkillArgs {

    @Field(() => SkillWhereInput, {nullable:true})
    @Type(() => SkillWhereInput)
    where?: SkillWhereInput;

    @Field(() => [SkillOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SkillOrderByWithRelationInput>;

    @Field(() => SkillWhereUniqueInput, {nullable:true})
    cursor?: SkillWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SkillScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SkillScalarFieldEnum>;
}
