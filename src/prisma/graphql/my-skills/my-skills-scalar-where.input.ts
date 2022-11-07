import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class MySkillsScalarWhereInput {

    @Field(() => [MySkillsScalarWhereInput], {nullable:true})
    AND?: Array<MySkillsScalarWhereInput>;

    @Field(() => [MySkillsScalarWhereInput], {nullable:true})
    OR?: Array<MySkillsScalarWhereInput>;

    @Field(() => [MySkillsScalarWhereInput], {nullable:true})
    NOT?: Array<MySkillsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    profileId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    skillId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    myRootsId?: IntNullableFilter;
}
