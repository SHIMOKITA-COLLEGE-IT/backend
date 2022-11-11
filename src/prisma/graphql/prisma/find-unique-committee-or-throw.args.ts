import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommitteeWhereUniqueInput } from '../committee/committee-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueCommitteeOrThrowArgs {

    @Field(() => CommitteeWhereUniqueInput, {nullable:false})
    @Type(() => CommitteeWhereUniqueInput)
    where!: CommitteeWhereUniqueInput;
}
