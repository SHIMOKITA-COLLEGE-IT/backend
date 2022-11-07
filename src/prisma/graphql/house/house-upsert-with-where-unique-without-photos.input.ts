import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseWhereUniqueInput } from './house-where-unique.input';
import { Type } from 'class-transformer';
import { HouseUpdateWithoutPhotosInput } from './house-update-without-photos.input';
import { HouseCreateWithoutPhotosInput } from './house-create-without-photos.input';

@InputType()
export class HouseUpsertWithWhereUniqueWithoutPhotosInput {

    @Field(() => HouseWhereUniqueInput, {nullable:false})
    @Type(() => HouseWhereUniqueInput)
    where!: HouseWhereUniqueInput;

    @Field(() => HouseUpdateWithoutPhotosInput, {nullable:false})
    @Type(() => HouseUpdateWithoutPhotosInput)
    update!: HouseUpdateWithoutPhotosInput;

    @Field(() => HouseCreateWithoutPhotosInput, {nullable:false})
    @Type(() => HouseCreateWithoutPhotosInput)
    create!: HouseCreateWithoutPhotosInput;
}
