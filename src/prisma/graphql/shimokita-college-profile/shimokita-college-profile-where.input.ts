import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { ProfileRelationFilter } from '../profile/profile-relation-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ProgramListRelationFilter } from '../program/program-list-relation-filter.input';
import { HouseListRelationFilter } from '../house/house-list-relation-filter.input';
import { HomeListRelationFilter } from '../home/home-list-relation-filter.input';
import { CommitteeListRelationFilter } from '../committee/committee-list-relation-filter.input';
import { ClubListRelationFilter } from '../club/club-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ShimokitaCollegeProfileWhereInput {

    @Field(() => [ShimokitaCollegeProfileWhereInput], {nullable:true})
    AND?: Array<ShimokitaCollegeProfileWhereInput>;

    @Field(() => [ShimokitaCollegeProfileWhereInput], {nullable:true})
    OR?: Array<ShimokitaCollegeProfileWhereInput>;

    @Field(() => [ShimokitaCollegeProfileWhereInput], {nullable:true})
    NOT?: Array<ShimokitaCollegeProfileWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => ProfileRelationFilter, {nullable:true})
    profile?: ProfileRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    profileId?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    isAlumni?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    slackEmail?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    roomNumber?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    postNumber?: IntFilter;

    @Field(() => ProgramListRelationFilter, {nullable:true})
    programs?: ProgramListRelationFilter;

    @Field(() => HouseListRelationFilter, {nullable:true})
    houses?: HouseListRelationFilter;

    @Field(() => HomeListRelationFilter, {nullable:true})
    homes?: HomeListRelationFilter;

    @Field(() => CommitteeListRelationFilter, {nullable:true})
    committee?: CommitteeListRelationFilter;

    @Field(() => ClubListRelationFilter, {nullable:true})
    clubs?: ClubListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
