import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { Type } from 'class-transformer';
import { ProfileCreateWithoutTagsInput } from './profile-create-without-tags.input';

@InputType()
export class ProfileCreateOrConnectWithoutTagsInput {

    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    @Type(() => ProfileWhereUniqueInput)
    where!: ProfileWhereUniqueInput;

    @Field(() => ProfileCreateWithoutTagsInput, {nullable:false})
    @Type(() => ProfileCreateWithoutTagsInput)
    create!: ProfileCreateWithoutTagsInput;
}
