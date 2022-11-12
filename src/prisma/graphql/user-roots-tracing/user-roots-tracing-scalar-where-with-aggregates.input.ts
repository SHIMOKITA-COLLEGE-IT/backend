import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class UserRootsTracingScalarWhereWithAggregatesInput {

    @Field(() => [UserRootsTracingScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserRootsTracingScalarWhereWithAggregatesInput>;

    @Field(() => [UserRootsTracingScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserRootsTracingScalarWhereWithAggregatesInput>;

    @Field(() => [UserRootsTracingScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserRootsTracingScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    rootsId?: IntWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    from?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    to?: DateTimeNullableWithAggregatesFilter;
}
