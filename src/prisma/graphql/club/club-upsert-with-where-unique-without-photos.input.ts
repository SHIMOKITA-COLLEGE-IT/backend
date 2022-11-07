import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { Type } from 'class-transformer';
import { ClubUpdateWithoutPhotosInput } from './club-update-without-photos.input';
import { ClubCreateWithoutPhotosInput } from './club-create-without-photos.input';

@InputType()
export class ClubUpsertWithWhereUniqueWithoutPhotosInput {

    @Field(() => ClubWhereUniqueInput, {nullable:false})
    @Type(() => ClubWhereUniqueInput)
    where!: ClubWhereUniqueInput;

    @Field(() => ClubUpdateWithoutPhotosInput, {nullable:false})
    @Type(() => ClubUpdateWithoutPhotosInput)
    update!: ClubUpdateWithoutPhotosInput;

    @Field(() => ClubCreateWithoutPhotosInput, {nullable:false})
    @Type(() => ClubCreateWithoutPhotosInput)
    create!: ClubCreateWithoutPhotosInput;
}
