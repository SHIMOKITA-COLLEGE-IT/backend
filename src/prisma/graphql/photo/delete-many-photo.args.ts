import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PhotoWhereInput } from './photo-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPhotoArgs {

    @Field(() => PhotoWhereInput, {nullable:true})
    @Type(() => PhotoWhereInput)
    where?: PhotoWhereInput;
}
