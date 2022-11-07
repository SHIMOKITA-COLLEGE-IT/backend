import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';
import { Type } from 'class-transformer';
import { PhotoUpdateWithoutHomesInput } from './photo-update-without-homes.input';

@InputType()
export class PhotoUpdateWithWhereUniqueWithoutHomesInput {

    @Field(() => PhotoWhereUniqueInput, {nullable:false})
    @Type(() => PhotoWhereUniqueInput)
    where!: PhotoWhereUniqueInput;

    @Field(() => PhotoUpdateWithoutHomesInput, {nullable:false})
    @Type(() => PhotoUpdateWithoutHomesInput)
    data!: PhotoUpdateWithoutHomesInput;
}
