import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';
import { Type } from 'class-transformer';
import { PhotoUpdateWithoutCoCosInput } from './photo-update-without-co-cos.input';
import { PhotoCreateWithoutCoCosInput } from './photo-create-without-co-cos.input';

@InputType()
export class PhotoUpsertWithWhereUniqueWithoutCoCosInput {

    @Field(() => PhotoWhereUniqueInput, {nullable:false})
    @Type(() => PhotoWhereUniqueInput)
    where!: PhotoWhereUniqueInput;

    @Field(() => PhotoUpdateWithoutCoCosInput, {nullable:false})
    @Type(() => PhotoUpdateWithoutCoCosInput)
    update!: PhotoUpdateWithoutCoCosInput;

    @Field(() => PhotoCreateWithoutCoCosInput, {nullable:false})
    @Type(() => PhotoCreateWithoutCoCosInput)
    create!: PhotoCreateWithoutCoCosInput;
}
