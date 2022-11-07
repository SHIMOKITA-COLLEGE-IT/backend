import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileRelationFilter } from '../profile/profile-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { SkillRelationFilter } from '../skill/skill-relation-filter.input';
import { MyRootsRelationFilter } from '../my-roots/my-roots-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class MySkillsWhereInput {

    @Field(() => [MySkillsWhereInput], {nullable:true})
    AND?: Array<MySkillsWhereInput>;

    @Field(() => [MySkillsWhereInput], {nullable:true})
    OR?: Array<MySkillsWhereInput>;

    @Field(() => [MySkillsWhereInput], {nullable:true})
    NOT?: Array<MySkillsWhereInput>;

    @Field(() => ProfileRelationFilter, {nullable:true})
    profile?: ProfileRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    profileId?: IntFilter;

    @Field(() => SkillRelationFilter, {nullable:true})
    skill?: SkillRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    skillId?: IntFilter;

    @Field(() => MyRootsRelationFilter, {nullable:true})
    myRoots?: MyRootsRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    myRootsId?: IntNullableFilter;
}
