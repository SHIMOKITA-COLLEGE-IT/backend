import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { Type } from 'class-transformer';
import { ProfileUpdateWithoutTagsInput } from './profile-update-without-tags.input';
import { ProfileCreateWithoutTagsInput } from './profile-create-without-tags.input';

@InputType()
export class ProfileUpsertWithWhereUniqueWithoutTagsInput {

    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    @Type(() => ProfileWhereUniqueInput)
    where!: ProfileWhereUniqueInput;

    @Field(() => ProfileUpdateWithoutTagsInput, {nullable:false})
    @Type(() => ProfileUpdateWithoutTagsInput)
    update!: ProfileUpdateWithoutTagsInput;

    @Field(() => ProfileCreateWithoutTagsInput, {nullable:false})
    @Type(() => ProfileCreateWithoutTagsInput)
    create!: ProfileCreateWithoutTagsInput;
}
