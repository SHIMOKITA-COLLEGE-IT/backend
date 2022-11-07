import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { Type } from 'class-transformer';
import { ProfileUpdateWithoutTagsInput } from './profile-update-without-tags.input';

@InputType()
export class ProfileUpdateWithWhereUniqueWithoutTagsInput {

    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    @Type(() => ProfileWhereUniqueInput)
    where!: ProfileWhereUniqueInput;

    @Field(() => ProfileUpdateWithoutTagsInput, {nullable:false})
    @Type(() => ProfileUpdateWithoutTagsInput)
    data!: ProfileUpdateWithoutTagsInput;
}
