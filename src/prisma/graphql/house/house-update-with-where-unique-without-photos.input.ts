import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseWhereUniqueInput } from './house-where-unique.input';
import { Type } from 'class-transformer';
import { HouseUpdateWithoutPhotosInput } from './house-update-without-photos.input';

@InputType()
export class HouseUpdateWithWhereUniqueWithoutPhotosInput {

    @Field(() => HouseWhereUniqueInput, {nullable:false})
    @Type(() => HouseWhereUniqueInput)
    where!: HouseWhereUniqueInput;

    @Field(() => HouseUpdateWithoutPhotosInput, {nullable:false})
    @Type(() => HouseUpdateWithoutPhotosInput)
    data!: HouseUpdateWithoutPhotosInput;
}
