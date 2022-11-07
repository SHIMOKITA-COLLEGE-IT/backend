import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ShimokitaCollegeProfileScalarWhereWithAggregatesInput {

    @Field(() => [ShimokitaCollegeProfileScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ShimokitaCollegeProfileScalarWhereWithAggregatesInput>;

    @Field(() => [ShimokitaCollegeProfileScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ShimokitaCollegeProfileScalarWhereWithAggregatesInput>;

    @Field(() => [ShimokitaCollegeProfileScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ShimokitaCollegeProfileScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    profileId?: IntWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isAlumni?: BoolWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    slackEmail?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    roomNumber?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    postNumber?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
