import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationType } from './generation-type.enum';

@InputType()
export class NestedEnumGenerationTypeFilter {

    @Field(() => GenerationType, {nullable:true})
    equals?: keyof typeof GenerationType;

    @Field(() => [GenerationType], {nullable:true})
    in?: Array<keyof typeof GenerationType>;

    @Field(() => [GenerationType], {nullable:true})
    notIn?: Array<keyof typeof GenerationType>;

    @Field(() => NestedEnumGenerationTypeFilter, {nullable:true})
    not?: NestedEnumGenerationTypeFilter;
}
