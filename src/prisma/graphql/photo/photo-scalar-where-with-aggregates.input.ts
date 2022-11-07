import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PhotoScalarWhereWithAggregatesInput {

    @Field(() => [PhotoScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PhotoScalarWhereWithAggregatesInput>;

    @Field(() => [PhotoScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PhotoScalarWhereWithAggregatesInput>;

    @Field(() => [PhotoScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PhotoScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    imageUrl?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    alt?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
