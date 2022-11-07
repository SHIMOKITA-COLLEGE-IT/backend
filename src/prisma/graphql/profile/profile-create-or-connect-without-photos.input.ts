import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { Type } from 'class-transformer';
import { ProfileCreateWithoutPhotosInput } from './profile-create-without-photos.input';

@InputType()
export class ProfileCreateOrConnectWithoutPhotosInput {

    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    @Type(() => ProfileWhereUniqueInput)
    where!: ProfileWhereUniqueInput;

    @Field(() => ProfileCreateWithoutPhotosInput, {nullable:false})
    @Type(() => ProfileCreateWithoutPhotosInput)
    create!: ProfileCreateWithoutPhotosInput;
}
