import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';
import { Type } from 'class-transformer';
import { PhotoUpdateWithoutClubsInput } from './photo-update-without-clubs.input';
import { PhotoCreateWithoutClubsInput } from './photo-create-without-clubs.input';

@InputType()
export class PhotoUpsertWithWhereUniqueWithoutClubsInput {

    @Field(() => PhotoWhereUniqueInput, {nullable:false})
    @Type(() => PhotoWhereUniqueInput)
    where!: PhotoWhereUniqueInput;

    @Field(() => PhotoUpdateWithoutClubsInput, {nullable:false})
    @Type(() => PhotoUpdateWithoutClubsInput)
    update!: PhotoUpdateWithoutClubsInput;

    @Field(() => PhotoCreateWithoutClubsInput, {nullable:false})
    @Type(() => PhotoCreateWithoutClubsInput)
    create!: PhotoCreateWithoutClubsInput;
}
