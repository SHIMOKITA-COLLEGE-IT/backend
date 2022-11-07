import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';
import { Type } from 'class-transformer';
import { PhotoCreateInput } from './photo-create.input';
import { PhotoUpdateInput } from './photo-update.input';

@ArgsType()
export class UpsertOnePhotoArgs {

    @Field(() => PhotoWhereUniqueInput, {nullable:false})
    @Type(() => PhotoWhereUniqueInput)
    where!: PhotoWhereUniqueInput;

    @Field(() => PhotoCreateInput, {nullable:false})
    @Type(() => PhotoCreateInput)
    create!: PhotoCreateInput;

    @Field(() => PhotoUpdateInput, {nullable:false})
    @Type(() => PhotoUpdateInput)
    update!: PhotoUpdateInput;
}
