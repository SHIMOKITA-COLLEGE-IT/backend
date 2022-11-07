import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommitteeWhereUniqueInput } from './committee-where-unique.input';
import { Type } from 'class-transformer';
import { CommitteeCreateInput } from './committee-create.input';
import { CommitteeUpdateInput } from './committee-update.input';

@ArgsType()
export class UpsertOneCommitteeArgs {

    @Field(() => CommitteeWhereUniqueInput, {nullable:false})
    @Type(() => CommitteeWhereUniqueInput)
    where!: CommitteeWhereUniqueInput;

    @Field(() => CommitteeCreateInput, {nullable:false})
    @Type(() => CommitteeCreateInput)
    create!: CommitteeCreateInput;

    @Field(() => CommitteeUpdateInput, {nullable:false})
    @Type(() => CommitteeUpdateInput)
    update!: CommitteeUpdateInput;
}
