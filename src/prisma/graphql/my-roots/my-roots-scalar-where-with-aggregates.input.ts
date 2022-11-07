import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class MyRootsScalarWhereWithAggregatesInput {

    @Field(() => [MyRootsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MyRootsScalarWhereWithAggregatesInput>;

    @Field(() => [MyRootsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MyRootsScalarWhereWithAggregatesInput>;

    @Field(() => [MyRootsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MyRootsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    profileId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    rootsId?: IntWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    from?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    to?: DateTimeNullableWithAggregatesFilter;
}
