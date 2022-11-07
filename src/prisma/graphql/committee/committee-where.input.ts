import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { PhotoListRelationFilter } from '../photo/photo-list-relation-filter.input';
import { ShimokitaCollegeProfileListRelationFilter } from '../shimokita-college-profile/shimokita-college-profile-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CommitteeWhereInput {

    @Field(() => [CommitteeWhereInput], {nullable:true})
    AND?: Array<CommitteeWhereInput>;

    @Field(() => [CommitteeWhereInput], {nullable:true})
    OR?: Array<CommitteeWhereInput>;

    @Field(() => [CommitteeWhereInput], {nullable:true})
    NOT?: Array<CommitteeWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    imageUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    slackChannel?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => PhotoListRelationFilter, {nullable:true})
    photos?: PhotoListRelationFilter;

    @Field(() => ShimokitaCollegeProfileListRelationFilter, {nullable:true})
    shimokitaCollegeProfiles?: ShimokitaCollegeProfileListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
