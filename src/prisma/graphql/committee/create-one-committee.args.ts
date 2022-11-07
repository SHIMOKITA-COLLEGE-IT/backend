import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommitteeCreateInput } from './committee-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCommitteeArgs {

    @Field(() => CommitteeCreateInput, {nullable:false})
    @Type(() => CommitteeCreateInput)
    data!: CommitteeCreateInput;
}
