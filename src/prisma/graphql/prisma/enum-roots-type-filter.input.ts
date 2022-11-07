import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RootsType } from './roots-type.enum';
import { NestedEnumRootsTypeFilter } from './nested-enum-roots-type-filter.input';

@InputType()
export class EnumRootsTypeFilter {

    @Field(() => RootsType, {nullable:true})
    equals?: keyof typeof RootsType;

    @Field(() => [RootsType], {nullable:true})
    in?: Array<keyof typeof RootsType>;

    @Field(() => [RootsType], {nullable:true})
    notIn?: Array<keyof typeof RootsType>;

    @Field(() => NestedEnumRootsTypeFilter, {nullable:true})
    not?: NestedEnumRootsTypeFilter;
}
