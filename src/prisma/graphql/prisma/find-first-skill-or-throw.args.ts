import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SkillWhereInput } from '../skill/skill-where.input';
import { Type } from 'class-transformer';
import { SkillOrderByWithRelationInput } from '../skill/skill-order-by-with-relation.input';
import { SkillWhereUniqueInput } from '../skill/skill-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SkillScalarFieldEnum } from '../skill/skill-scalar-field.enum';

@ArgsType()
export class FindFirstSkillOrThrowArgs {

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
