import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PhotoUpdateInput } from './photo-update.input';
import { Type } from 'class-transformer';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';

@ArgsType()
export class UpdateOnePhotoArgs {

    @Field(() => PhotoUpdateInput, {nullable:false})
    @Type(() => PhotoUpdateInput)
    data!: PhotoUpdateInput;

    @Field(() => PhotoWhereUniqueInput, {nullable:false})
    @Type(() => PhotoWhereUniqueInput)
    where!: PhotoWhereUniqueInput;
}
