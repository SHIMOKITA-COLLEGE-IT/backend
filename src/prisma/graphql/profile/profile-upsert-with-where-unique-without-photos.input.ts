import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { Type } from 'class-transformer';
import { ProfileUpdateWithoutPhotosInput } from './profile-update-without-photos.input';
import { ProfileCreateWithoutPhotosInput } from './profile-create-without-photos.input';

@InputType()
export class ProfileUpsertWithWhereUniqueWithoutPhotosInput {

    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    @Type(() => ProfileWhereUniqueInput)
    where!: ProfileWhereUniqueInput;

    @Field(() => ProfileUpdateWithoutPhotosInput, {nullable:false})
    @Type(() => ProfileUpdateWithoutPhotosInput)
    update!: ProfileUpdateWithoutPhotosInput;

    @Field(() => ProfileCreateWithoutPhotosInput, {nullable:false})
    @Type(() => ProfileCreateWithoutPhotosInput)
    create!: ProfileCreateWithoutPhotosInput;
}
