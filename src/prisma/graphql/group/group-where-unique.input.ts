import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GroupGroupTypeNameFromToCompoundUniqueInput } from './group-group-type-name-from-to-compound-unique.input';

@InputType()
export class GroupWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => GroupGroupTypeNameFromToCompoundUniqueInput, {nullable:true})
    groupType_name_from_to?: GroupGroupTypeNameFromToCompoundUniqueInput;
}
