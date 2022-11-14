import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GroupGroupTypeNameCompoundUniqueInput } from './group-group-type-name-compound-unique.input';

@InputType()
export class GroupWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => GroupGroupTypeNameCompoundUniqueInput, {nullable:true})
    groupType_name?: GroupGroupTypeNameCompoundUniqueInput;
}
