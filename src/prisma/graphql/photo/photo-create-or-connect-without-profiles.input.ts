import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';
import { Type } from 'class-transformer';
import { PhotoCreateWithoutProfilesInput } from './photo-create-without-profiles.input';

@InputType()
export class PhotoCreateOrConnectWithoutProfilesInput {

    @Field(() => PhotoWhereUniqueInput, {nullable:false})
    @Type(() => PhotoWhereUniqueInput)
    where!: PhotoWhereUniqueInput;

    @Field(() => PhotoCreateWithoutProfilesInput, {nullable:false})
    @Type(() => PhotoCreateWithoutProfilesInput)
    create!: PhotoCreateWithoutProfilesInput;
}
