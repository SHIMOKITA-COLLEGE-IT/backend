import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';
import { Type } from 'class-transformer';
import { PhotoUpdateWithoutCoCosInput } from './photo-update-without-co-cos.input';

@InputType()
export class PhotoUpdateWithWhereUniqueWithoutCoCosInput {

    @Field(() => PhotoWhereUniqueInput, {nullable:false})
    @Type(() => PhotoWhereUniqueInput)
    where!: PhotoWhereUniqueInput;

    @Field(() => PhotoUpdateWithoutCoCosInput, {nullable:false})
    @Type(() => PhotoUpdateWithoutCoCosInput)
    data!: PhotoUpdateWithoutCoCosInput;
}
