import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { PhotoListRelationFilter } from '../photo/photo-list-relation-filter.input';
import { ShimokitaCollegeProfileListRelationFilter } from '../shimokita-college-profile/shimokita-college-profile-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class HomeWhereInput {

    @Field(() => [HomeWhereInput], {nullable:true})
    AND?: Array<HomeWhereInput>;

    @Field(() => [HomeWhereInput], {nullable:true})
    OR?: Array<HomeWhereInput>;

    @Field(() => [HomeWhereInput], {nullable:true})
    NOT?: Array<HomeWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    from?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    to?: DateTimeNullableFilter;

    @Field(() => PhotoListRelationFilter, {nullable:true})
    photos?: PhotoListRelationFilter;

    @Field(() => ShimokitaCollegeProfileListRelationFilter, {nullable:true})
    shimokitaCollegeProfiles?: ShimokitaCollegeProfileListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
