import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePhotoArgs {

    @Field(() => PhotoWhereUniqueInput, {nullable:false})
    @Type(() => PhotoWhereUniqueInput)
    where!: PhotoWhereUniqueInput;
}