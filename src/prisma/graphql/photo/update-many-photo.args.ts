import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PhotoUpdateManyMutationInput } from './photo-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PhotoWhereInput } from './photo-where.input';

@ArgsType()
export class UpdateManyPhotoArgs {

    @Field(() => PhotoUpdateManyMutationInput, {nullable:false})
    @Type(() => PhotoUpdateManyMutationInput)
    data!: PhotoUpdateManyMutationInput;

    @Field(() => PhotoWhereInput, {nullable:true})
    @Type(() => PhotoWhereInput)
    where?: PhotoWhereInput;
}
