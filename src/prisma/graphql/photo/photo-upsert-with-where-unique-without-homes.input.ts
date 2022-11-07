import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';
import { Type } from 'class-transformer';
import { PhotoUpdateWithoutHomesInput } from './photo-update-without-homes.input';
import { PhotoCreateWithoutHomesInput } from './photo-create-without-homes.input';

@InputType()
export class PhotoUpsertWithWhereUniqueWithoutHomesInput {

    @Field(() => PhotoWhereUniqueInput, {nullable:false})
    @Type(() => PhotoWhereUniqueInput)
    where!: PhotoWhereUniqueInput;

    @Field(() => PhotoUpdateWithoutHomesInput, {nullable:false})
    @Type(() => PhotoUpdateWithoutHomesInput)
    update!: PhotoUpdateWithoutHomesInput;

    @Field(() => PhotoCreateWithoutHomesInput, {nullable:false})
    @Type(() => PhotoCreateWithoutHomesInput)
    create!: PhotoCreateWithoutHomesInput;
}
