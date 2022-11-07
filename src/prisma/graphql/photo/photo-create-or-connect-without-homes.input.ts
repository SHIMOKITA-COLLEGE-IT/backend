import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';
import { Type } from 'class-transformer';
import { PhotoCreateWithoutHomesInput } from './photo-create-without-homes.input';

@InputType()
export class PhotoCreateOrConnectWithoutHomesInput {

    @Field(() => PhotoWhereUniqueInput, {nullable:false})
    @Type(() => PhotoWhereUniqueInput)
    where!: PhotoWhereUniqueInput;

    @Field(() => PhotoCreateWithoutHomesInput, {nullable:false})
    @Type(() => PhotoCreateWithoutHomesInput)
    create!: PhotoCreateWithoutHomesInput;
}
