import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommitteeWhereInput } from './committee-where.input';

@InputType()
export class CommitteeListRelationFilter {

    @Field(() => CommitteeWhereInput, {nullable:true})
    every?: CommitteeWhereInput;

    @Field(() => CommitteeWhereInput, {nullable:true})
    some?: CommitteeWhereInput;

    @Field(() => CommitteeWhereInput, {nullable:true})
    none?: CommitteeWhereInput;
}
