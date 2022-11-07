import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RootsType } from './roots-type.enum';
import { NestedEnumRootsTypeWithAggregatesFilter } from './nested-enum-roots-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumRootsTypeFilter } from './nested-enum-roots-type-filter.input';

@InputType()
export class EnumRootsTypeWithAggregatesFilter {

    @Field(() => RootsType, {nullable:true})
    equals?: keyof typeof RootsType;

    @Field(() => [RootsType], {nullable:true})
    in?: Array<keyof typeof RootsType>;

    @Field(() => [RootsType], {nullable:true})
    notIn?: Array<keyof typeof RootsType>;

    @Field(() => NestedEnumRootsTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumRootsTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumRootsTypeFilter, {nullable:true})
    _min?: NestedEnumRootsTypeFilter;

    @Field(() => NestedEnumRootsTypeFilter, {nullable:true})
    _max?: NestedEnumRootsTypeFilter;
}
