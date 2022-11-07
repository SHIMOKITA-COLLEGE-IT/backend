import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ProfileListRelationFilter } from '../profile/profile-list-relation-filter.input';
import { HouseListRelationFilter } from '../house/house-list-relation-filter.input';
import { HomeListRelationFilter } from '../home/home-list-relation-filter.input';
import { CommitteeListRelationFilter } from '../committee/committee-list-relation-filter.input';
import { ClubListRelationFilter } from '../club/club-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PhotoWhereInput {

    @Field(() => [PhotoWhereInput], {nullable:true})
    AND?: Array<PhotoWhereInput>;

    @Field(() => [PhotoWhereInput], {nullable:true})
    OR?: Array<PhotoWhereInput>;

    @Field(() => [PhotoWhereInput], {nullable:true})
    NOT?: Array<PhotoWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    imageUrl?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    alt?: StringFilter;

    @Field(() => ProfileListRelationFilter, {nullable:true})
    profiles?: ProfileListRelationFilter;

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
