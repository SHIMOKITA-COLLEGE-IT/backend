import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';
import { Type } from 'class-transformer';
import { PhotoUpdateWithoutProfilesInput } from './photo-update-without-profiles.input';

@InputType()
export class PhotoUpdateWithWhereUniqueWithoutProfilesInput {

    @Field(() => PhotoWhereUniqueInput, {nullable:false})
    @Type(() => PhotoWhereUniqueInput)
    where!: PhotoWhereUniqueInput;

    @Field(() => PhotoUpdateWithoutProfilesInput, {nullable:false})
    @Type(() => PhotoUpdateWithoutProfilesInput)
    data!: PhotoUpdateWithoutProfilesInput;
}
