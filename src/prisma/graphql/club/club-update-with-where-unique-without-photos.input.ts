import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { Type } from 'class-transformer';
import { ClubUpdateWithoutPhotosInput } from './club-update-without-photos.input';

@InputType()
export class ClubUpdateWithWhereUniqueWithoutPhotosInput {

    @Field(() => ClubWhereUniqueInput, {nullable:false})
    @Type(() => ClubWhereUniqueInput)
    where!: ClubWhereUniqueInput;

    @Field(() => ClubUpdateWithoutPhotosInput, {nullable:false})
    @Type(() => ClubUpdateWithoutPhotosInput)
    data!: ClubUpdateWithoutPhotosInput;
}
