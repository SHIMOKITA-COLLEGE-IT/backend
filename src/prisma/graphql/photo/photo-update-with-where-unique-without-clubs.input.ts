import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';
import { Type } from 'class-transformer';
import { PhotoUpdateWithoutClubsInput } from './photo-update-without-clubs.input';

@InputType()
export class PhotoUpdateWithWhereUniqueWithoutClubsInput {

    @Field(() => PhotoWhereUniqueInput, {nullable:false})
    @Type(() => PhotoWhereUniqueInput)
    where!: PhotoWhereUniqueInput;

    @Field(() => PhotoUpdateWithoutClubsInput, {nullable:false})
    @Type(() => PhotoUpdateWithoutClubsInput)
    data!: PhotoUpdateWithoutClubsInput;
}
