import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeWhereUniqueInput } from './home-where-unique.input';
import { Type } from 'class-transformer';
import { HomeCreateWithoutPhotosInput } from './home-create-without-photos.input';

@InputType()
export class HomeCreateOrConnectWithoutPhotosInput {

    @Field(() => HomeWhereUniqueInput, {nullable:false})
    @Type(() => HomeWhereUniqueInput)
    where!: HomeWhereUniqueInput;

    @Field(() => HomeCreateWithoutPhotosInput, {nullable:false})
    @Type(() => HomeCreateWithoutPhotosInput)
    create!: HomeCreateWithoutPhotosInput;
}
