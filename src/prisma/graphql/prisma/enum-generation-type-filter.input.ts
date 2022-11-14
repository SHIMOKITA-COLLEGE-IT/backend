import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationType } from './generation-type.enum';
import { NestedEnumGenerationTypeFilter } from './nested-enum-generation-type-filter.input';

@InputType()
export class EnumGenerationTypeFilter {

    @Field(() => GenerationType, {nullable:true})
    equals?: keyof typeof GenerationType;

    @Field(() => [GenerationType], {nullable:true})
    in?: Array<keyof typeof GenerationType>;

    @Field(() => [GenerationType], {nullable:true})
    notIn?: Array<keyof typeof GenerationType>;

    @Field(() => NestedEnumGenerationTypeFilter, {nullable:true})
    not?: NestedEnumGenerationTypeFilter;
}
