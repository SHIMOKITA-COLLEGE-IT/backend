import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommitteeWhereInput } from '../committee/committee-where.input';
import { Type } from 'class-transformer';
import { CommitteeOrderByWithRelationInput } from '../committee/committee-order-by-with-relation.input';
import { CommitteeWhereUniqueInput } from '../committee/committee-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CommitteeScalarFieldEnum } from '../committee/committee-scalar-field.enum';

@ArgsType()
export class FindFirstCommitteeOrThrowArgs {

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
