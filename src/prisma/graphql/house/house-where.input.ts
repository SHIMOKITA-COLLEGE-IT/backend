import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { PhotoListRelationFilter } from '../photo/photo-list-relation-filter.input';
import { ShimokitaCollegeProfileListRelationFilter } from '../shimokita-college-profile/shimokita-college-profile-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class HouseWhereInput {

    @Field(() => [HouseWhereInput], {nullable:true})
    AND?: Array<HouseWhereInput>;

    @Field(() => [HouseWhereInput], {nullable:true})
    OR?: Array<HouseWhereInput>;

    @Field(() => [HouseWhereInput], {nullable:true})
    NOT?: Array<HouseWhereInput>;

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
