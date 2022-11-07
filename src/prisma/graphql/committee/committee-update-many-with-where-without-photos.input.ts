import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommitteeScalarWhereInput } from './committee-scalar-where.input';
import { Type } from 'class-transformer';
import { CommitteeUpdateManyMutationInput } from './committee-update-many-mutation.input';

@InputType()
export class CommitteeUpdateManyWithWhereWithoutPhotosInput {

    @Field(() => CommitteeScalarWhereInput, {nullable:false})
    @Type(() => CommitteeScalarWhereInput)
    where!: CommitteeScalarWhereInput;

    @Field(() => CommitteeUpdateManyMutationInput, {nullable:false})
    @Type(() => CommitteeUpdateManyMutationInput)
    data!: CommitteeUpdateManyMutationInput;
}
