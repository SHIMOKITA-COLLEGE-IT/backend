import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PhotoCreateInput } from './photo-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePhotoArgs {

    @Field(() => PhotoCreateInput, {nullable:false})
    @Type(() => PhotoCreateInput)
    data!: PhotoCreateInput;
}
