import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeWhereUniqueInput } from './home-where-unique.input';
import { Type } from 'class-transformer';
import { HomeUpdateWithoutPhotosInput } from './home-update-without-photos.input';

@InputType()
export class HomeUpdateWithWhereUniqueWithoutPhotosInput {

    @Field(() => HomeWhereUniqueInput, {nullable:false})
    @Type(() => HomeWhereUniqueInput)
    where!: HomeWhereUniqueInput;

    @Field(() => HomeUpdateWithoutPhotosInput, {nullable:false})
    @Type(() => HomeUpdateWithoutPhotosInput)
    data!: HomeUpdateWithoutPhotosInput;
}
