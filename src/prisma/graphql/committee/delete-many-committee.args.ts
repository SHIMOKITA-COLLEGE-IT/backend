import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommitteeWhereInput } from './committee-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyCommitteeArgs {

    @Field(() => CommitteeWhereInput, {nullable:true})
    @Type(() => CommitteeWhereInput)
    where?: CommitteeWhereInput;
}
