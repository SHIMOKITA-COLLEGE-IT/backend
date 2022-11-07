import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommitteeUpdateInput } from './committee-update.input';
import { Type } from 'class-transformer';
import { CommitteeWhereUniqueInput } from './committee-where-unique.input';

@ArgsType()
export class UpdateOneCommitteeArgs {

    @Field(() => CommitteeUpdateInput, {nullable:false})
    @Type(() => CommitteeUpdateInput)
    data!: CommitteeUpdateInput;

    @Field(() => CommitteeWhereUniqueInput, {nullable:false})
    @Type(() => CommitteeWhereUniqueInput)
    where!: CommitteeWhereUniqueInput;
}
