import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class SkillScalarWhereInput {

    @Field(() => [SkillScalarWhereInput], {nullable:true})
    AND?: Array<SkillScalarWhereInput>;

    @Field(() => [SkillScalarWhereInput], {nullable:true})
    OR?: Array<SkillScalarWhereInput>;

    @Field(() => [SkillScalarWhereInput], {nullable:true})
    NOT?: Array<SkillScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    parentId?: IntNullableFilter;
}
