import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommitteeCreateManyInput } from './committee-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCommitteeArgs {

    @Field(() => [CommitteeCreateManyInput], {nullable:false})
    @Type(() => CommitteeCreateManyInput)
    data!: Array<CommitteeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
