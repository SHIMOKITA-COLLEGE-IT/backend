import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumRootsTypeWithAggregatesFilter } from '../prisma/enum-roots-type-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class RootsScalarWhereWithAggregatesInput {

    @Field(() => [RootsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RootsScalarWhereWithAggregatesInput>;

    @Field(() => [RootsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RootsScalarWhereWithAggregatesInput>;

    @Field(() => [RootsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RootsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => EnumRootsTypeWithAggregatesFilter, {nullable:true})
    rootsType?: EnumRootsTypeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    googleMapUrl?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    introductionUrl?: StringNullableWithAggregatesFilter;
}
