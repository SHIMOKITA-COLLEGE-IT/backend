import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommitteeWhereInput } from './committee-where.input';
import { Type } from 'class-transformer';
import { CommitteeOrderByWithRelationInput } from './committee-order-by-with-relation.input';
import { CommitteeWhereUniqueInput } from './committee-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CommitteeScalarFieldEnum } from './committee-scalar-field.enum';

@ArgsType()
export class FindFirstCommitteeArgs {

    @Field(() => CommitteeWhereInput, {nullable:true})
    @Type(() => CommitteeWhereInput)
    where?: CommitteeWhereInput;

    @Field(() => [CommitteeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CommitteeOrderByWithRelationInput>;

    @Field(() => CommitteeWhereUniqueInput, {nullable:true})
    cursor?: CommitteeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CommitteeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CommitteeScalarFieldEnum>;
}
