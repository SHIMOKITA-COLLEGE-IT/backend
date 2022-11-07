import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';
import { Type } from 'class-transformer';
import { PhotoUpdateWithoutHousesInput } from './photo-update-without-houses.input';
import { PhotoCreateWithoutHousesInput } from './photo-create-without-houses.input';

@InputType()
export class PhotoUpsertWithWhereUniqueWithoutHousesInput {

    @Field(() => PhotoWhereUniqueInput, {nullable:false})
    @Type(() => PhotoWhereUniqueInput)
    where!: PhotoWhereUniqueInput;

    @Field(() => PhotoUpdateWithoutHousesInput, {nullable:false})
    @Type(() => PhotoUpdateWithoutHousesInput)
    update!: PhotoUpdateWithoutHousesInput;

    @Field(() => PhotoCreateWithoutHousesInput, {nullable:false})
    @Type(() => PhotoCreateWithoutHousesInput)
    create!: PhotoCreateWithoutHousesInput;
}
