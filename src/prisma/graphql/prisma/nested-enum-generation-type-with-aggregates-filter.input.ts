import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationType } from './generation-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumGenerationTypeFilter } from './nested-enum-generation-type-filter.input';

@InputType()
export class NestedEnumGenerationTypeWithAggregatesFilter {

    @Field(() => GenerationType, {nullable:true})
    equals?: keyof typeof GenerationType;

    @Field(() => [GenerationType], {nullable:true})
    in?: Array<keyof typeof GenerationType>;

    @Field(() => [GenerationType], {nullable:true})
    notIn?: Array<keyof typeof GenerationType>;

    @Field(() => NestedEnumGenerationTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumGenerationTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumGenerationTypeFilter, {nullable:true})
    _min?: NestedEnumGenerationTypeFilter;

    @Field(() => NestedEnumGenerationTypeFilter, {nullable:true})
    _max?: NestedEnumGenerationTypeFilter;
}
