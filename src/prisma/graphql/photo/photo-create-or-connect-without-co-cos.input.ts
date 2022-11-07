import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';
import { Type } from 'class-transformer';
import { PhotoCreateWithoutCoCosInput } from './photo-create-without-co-cos.input';

@InputType()
export class PhotoCreateOrConnectWithoutCoCosInput {

    @Field(() => PhotoWhereUniqueInput, {nullable:false})
    @Type(() => PhotoWhereUniqueInput)
    where!: PhotoWhereUniqueInput;

    @Field(() => PhotoCreateWithoutCoCosInput, {nullable:false})
    @Type(() => PhotoCreateWithoutCoCosInput)
    create!: PhotoCreateWithoutCoCosInput;
}
