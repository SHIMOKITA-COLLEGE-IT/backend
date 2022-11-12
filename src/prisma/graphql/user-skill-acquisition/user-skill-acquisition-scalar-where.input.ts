import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class UserSkillAcquisitionScalarWhereInput {

    @Field(() => [UserSkillAcquisitionScalarWhereInput], {nullable:true})
    AND?: Array<UserSkillAcquisitionScalarWhereInput>;

    @Field(() => [UserSkillAcquisitionScalarWhereInput], {nullable:true})
    OR?: Array<UserSkillAcquisitionScalarWhereInput>;

    @Field(() => [UserSkillAcquisitionScalarWhereInput], {nullable:true})
    NOT?: Array<UserSkillAcquisitionScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    skillId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    rootsId?: IntNullableFilter;
}
