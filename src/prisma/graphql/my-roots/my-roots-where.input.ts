import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { ProfileRelationFilter } from '../profile/profile-relation-filter.input';
import { RootsRelationFilter } from '../roots/roots-relation-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { MySkillsListRelationFilter } from '../my-skills/my-skills-list-relation-filter.input';

@InputType()
export class MyRootsWhereInput {

    @Field(() => [MyRootsWhereInput], {nullable:true})
    AND?: Array<MyRootsWhereInput>;

    @Field(() => [MyRootsWhereInput], {nullable:true})
    OR?: Array<MyRootsWhereInput>;

    @Field(() => [MyRootsWhereInput], {nullable:true})
    NOT?: Array<MyRootsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => ProfileRelationFilter, {nullable:true})
    profile?: ProfileRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    profileId?: IntFilter;

    @Field(() => RootsRelationFilter, {nullable:true})
    roots?: RootsRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    rootsId?: IntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    from?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    to?: DateTimeNullableFilter;

    @Field(() => MySkillsListRelationFilter, {nullable:true})
    profilesOnSkills?: MySkillsListRelationFilter;
}
