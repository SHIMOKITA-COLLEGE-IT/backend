import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { Type } from 'class-transformer';
import { ClubCreateWithoutPhotosInput } from './club-create-without-photos.input';

@InputType()
export class ClubCreateOrConnectWithoutPhotosInput {

    @Field(() => ClubWhereUniqueInput, {nullable:false})
    @Type(() => ClubWhereUniqueInput)
    where!: ClubWhereUniqueInput;

    @Field(() => ClubCreateWithoutPhotosInput, {nullable:false})
    @Type(() => ClubCreateWithoutPhotosInput)
    create!: ClubCreateWithoutPhotosInput;
}
