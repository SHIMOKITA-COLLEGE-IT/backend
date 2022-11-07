import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RootsType } from './roots-type.enum';

@InputType()
export class NestedEnumRootsTypeFilter {

    @Field(() => RootsType, {nullable:true})
    equals?: keyof typeof RootsType;

    @Field(() => [RootsType], {nullable:true})
    in?: Array<keyof typeof RootsType>;

    @Field(() => [RootsType], {nullable:true})
    notIn?: Array<keyof typeof RootsType>;

    @Field(() => NestedEnumRootsTypeFilter, {nullable:true})
    not?: NestedEnumRootsTypeFilter;
}
