import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseWhereUniqueInput } from './house-where-unique.input';
import { Type } from 'class-transformer';
import { HouseCreateWithoutPhotosInput } from './house-create-without-photos.input';

@InputType()
export class HouseCreateOrConnectWithoutPhotosInput {

    @Field(() => HouseWhereUniqueInput, {nullable:false})
    @Type(() => HouseWhereUniqueInput)
    where!: HouseWhereUniqueInput;

    @Field(() => HouseCreateWithoutPhotosInput, {nullable:false})
    @Type(() => HouseCreateWithoutPhotosInput)
    create!: HouseCreateWithoutPhotosInput;
}
