import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';
import { Type } from 'class-transformer';
import { PhotoUpdateWithoutCommitteeInput } from './photo-update-without-committee.input';

@InputType()
export class PhotoUpdateWithWhereUniqueWithoutCommitteeInput {

    @Field(() => PhotoWhereUniqueInput, {nullable:false})
    @Type(() => PhotoWhereUniqueInput)
    where!: PhotoWhereUniqueInput;

    @Field(() => PhotoUpdateWithoutCommitteeInput, {nullable:false})
    @Type(() => PhotoUpdateWithoutCommitteeInput)
    data!: PhotoUpdateWithoutCommitteeInput;
}
