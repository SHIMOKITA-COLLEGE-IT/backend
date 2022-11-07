import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';
import { Type } from 'class-transformer';
import { PhotoCreateWithoutHousesInput } from './photo-create-without-houses.input';

@InputType()
export class PhotoCreateOrConnectWithoutHousesInput {

    @Field(() => PhotoWhereUniqueInput, {nullable:false})
    @Type(() => PhotoWhereUniqueInput)
    where!: PhotoWhereUniqueInput;

    @Field(() => PhotoCreateWithoutHousesInput, {nullable:false})
    @Type(() => PhotoCreateWithoutHousesInput)
    create!: PhotoCreateWithoutHousesInput;
}
