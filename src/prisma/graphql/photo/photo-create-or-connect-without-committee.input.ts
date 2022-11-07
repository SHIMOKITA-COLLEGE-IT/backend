import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';
import { Type } from 'class-transformer';
import { PhotoCreateWithoutCommitteeInput } from './photo-create-without-committee.input';

@InputType()
export class PhotoCreateOrConnectWithoutCommitteeInput {

    @Field(() => PhotoWhereUniqueInput, {nullable:false})
    @Type(() => PhotoWhereUniqueInput)
    where!: PhotoWhereUniqueInput;

    @Field(() => PhotoCreateWithoutCommitteeInput, {nullable:false})
    @Type(() => PhotoCreateWithoutCommitteeInput)
    create!: PhotoCreateWithoutCommitteeInput;
}
