import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommitteeWhereUniqueInput } from './committee-where-unique.input';
import { Type } from 'class-transformer';
import { CommitteeCreateWithoutPhotosInput } from './committee-create-without-photos.input';

@InputType()
export class CommitteeCreateOrConnectWithoutPhotosInput {

    @Field(() => CommitteeWhereUniqueInput, {nullable:false})
    @Type(() => CommitteeWhereUniqueInput)
    where!: CommitteeWhereUniqueInput;

    @Field(() => CommitteeCreateWithoutPhotosInput, {nullable:false})
    @Type(() => CommitteeCreateWithoutPhotosInput)
    create!: CommitteeCreateWithoutPhotosInput;
}
