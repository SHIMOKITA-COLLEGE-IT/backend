import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommitteeWhereUniqueInput } from './committee-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneCommitteeArgs {

    @Field(() => CommitteeWhereUniqueInput, {nullable:false})
    @Type(() => CommitteeWhereUniqueInput)
    where!: CommitteeWhereUniqueInput;
}
