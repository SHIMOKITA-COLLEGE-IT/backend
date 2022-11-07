import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoCoWhereUniqueInput } from './co-co-where-unique.input';
import { Type } from 'class-transformer';
import { CoCoUpdateWithoutPhotosInput } from './co-co-update-without-photos.input';
import { CoCoCreateWithoutPhotosInput } from './co-co-create-without-photos.input';

@InputType()
export class CoCoUpsertWithWhereUniqueWithoutPhotosInput {

    @Field(() => CoCoWhereUniqueInput, {nullable:false})
    @Type(() => CoCoWhereUniqueInput)
    where!: CoCoWhereUniqueInput;

    @Field(() => CoCoUpdateWithoutPhotosInput, {nullable:false})
    @Type(() => CoCoUpdateWithoutPhotosInput)
    update!: CoCoUpdateWithoutPhotosInput;

    @Field(() => CoCoCreateWithoutPhotosInput, {nullable:false})
    @Type(() => CoCoCreateWithoutPhotosInput)
    create!: CoCoCreateWithoutPhotosInput;
}
