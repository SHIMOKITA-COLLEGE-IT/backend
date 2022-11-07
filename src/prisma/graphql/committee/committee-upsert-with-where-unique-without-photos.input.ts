import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommitteeWhereUniqueInput } from './committee-where-unique.input';
import { Type } from 'class-transformer';
import { CommitteeUpdateWithoutPhotosInput } from './committee-update-without-photos.input';
import { CommitteeCreateWithoutPhotosInput } from './committee-create-without-photos.input';

@InputType()
export class CommitteeUpsertWithWhereUniqueWithoutPhotosInput {

    @Field(() => CommitteeWhereUniqueInput, {nullable:false})
    @Type(() => CommitteeWhereUniqueInput)
    where!: CommitteeWhereUniqueInput;

    @Field(() => CommitteeUpdateWithoutPhotosInput, {nullable:false})
    @Type(() => CommitteeUpdateWithoutPhotosInput)
    update!: CommitteeUpdateWithoutPhotosInput;

    @Field(() => CommitteeCreateWithoutPhotosInput, {nullable:false})
    @Type(() => CommitteeCreateWithoutPhotosInput)
    create!: CommitteeCreateWithoutPhotosInput;
}
