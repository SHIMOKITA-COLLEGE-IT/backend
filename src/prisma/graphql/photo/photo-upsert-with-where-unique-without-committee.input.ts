import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';
import { Type } from 'class-transformer';
import { PhotoUpdateWithoutCommitteeInput } from './photo-update-without-committee.input';
import { PhotoCreateWithoutCommitteeInput } from './photo-create-without-committee.input';

@InputType()
export class PhotoUpsertWithWhereUniqueWithoutCommitteeInput {

    @Field(() => PhotoWhereUniqueInput, {nullable:false})
    @Type(() => PhotoWhereUniqueInput)
    where!: PhotoWhereUniqueInput;

    @Field(() => PhotoUpdateWithoutCommitteeInput, {nullable:false})
    @Type(() => PhotoUpdateWithoutCommitteeInput)
    update!: PhotoUpdateWithoutCommitteeInput;

    @Field(() => PhotoCreateWithoutCommitteeInput, {nullable:false})
    @Type(() => PhotoCreateWithoutCommitteeInput)
    create!: PhotoCreateWithoutCommitteeInput;
}
