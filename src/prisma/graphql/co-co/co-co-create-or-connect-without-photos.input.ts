import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoCoWhereUniqueInput } from './co-co-where-unique.input';
import { Type } from 'class-transformer';
import { CoCoCreateWithoutPhotosInput } from './co-co-create-without-photos.input';

@InputType()
export class CoCoCreateOrConnectWithoutPhotosInput {

    @Field(() => CoCoWhereUniqueInput, {nullable:false})
    @Type(() => CoCoWhereUniqueInput)
    where!: CoCoWhereUniqueInput;

    @Field(() => CoCoCreateWithoutPhotosInput, {nullable:false})
    @Type(() => CoCoCreateWithoutPhotosInput)
    create!: CoCoCreateWithoutPhotosInput;
}
