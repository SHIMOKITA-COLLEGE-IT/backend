import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PhotoCreateManyInput } from './photo-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPhotoArgs {

    @Field(() => [PhotoCreateManyInput], {nullable:false})
    @Type(() => PhotoCreateManyInput)
    data!: Array<PhotoCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
