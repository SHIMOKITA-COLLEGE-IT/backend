import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoCoWhereUniqueInput } from './co-co-where-unique.input';
import { Type } from 'class-transformer';
import { CoCoUpdateWithoutPhotosInput } from './co-co-update-without-photos.input';

@InputType()
export class CoCoUpdateWithWhereUniqueWithoutPhotosInput {

    @Field(() => CoCoWhereUniqueInput, {nullable:false})
    @Type(() => CoCoWhereUniqueInput)
    where!: CoCoWhereUniqueInput;

    @Field(() => CoCoUpdateWithoutPhotosInput, {nullable:false})
    @Type(() => CoCoUpdateWithoutPhotosInput)
    data!: CoCoUpdateWithoutPhotosInput;
}
