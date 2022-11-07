import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { Type } from 'class-transformer';
import { ProfileUpdateWithoutPhotosInput } from './profile-update-without-photos.input';

@InputType()
export class ProfileUpdateWithWhereUniqueWithoutPhotosInput {

    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    @Type(() => ProfileWhereUniqueInput)
    where!: ProfileWhereUniqueInput;

    @Field(() => ProfileUpdateWithoutPhotosInput, {nullable:false})
    @Type(() => ProfileUpdateWithoutPhotosInput)
    data!: ProfileUpdateWithoutPhotosInput;
}
