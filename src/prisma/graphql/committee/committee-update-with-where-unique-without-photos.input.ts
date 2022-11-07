import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommitteeWhereUniqueInput } from './committee-where-unique.input';
import { Type } from 'class-transformer';
import { CommitteeUpdateWithoutPhotosInput } from './committee-update-without-photos.input';

@InputType()
export class CommitteeUpdateWithWhereUniqueWithoutPhotosInput {

    @Field(() => CommitteeWhereUniqueInput, {nullable:false})
    @Type(() => CommitteeWhereUniqueInput)
    where!: CommitteeWhereUniqueInput;

    @Field(() => CommitteeUpdateWithoutPhotosInput, {nullable:false})
    @Type(() => CommitteeUpdateWithoutPhotosInput)
    data!: CommitteeUpdateWithoutPhotosInput;
}
