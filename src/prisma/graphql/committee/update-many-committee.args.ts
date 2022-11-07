import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommitteeUpdateManyMutationInput } from './committee-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CommitteeWhereInput } from './committee-where.input';

@ArgsType()
export class UpdateManyCommitteeArgs {

    @Field(() => CommitteeUpdateManyMutationInput, {nullable:false})
    @Type(() => CommitteeUpdateManyMutationInput)
    data!: CommitteeUpdateManyMutationInput;

    @Field(() => CommitteeWhereInput, {nullable:true})
    @Type(() => CommitteeWhereInput)
    where?: CommitteeWhereInput;
}
