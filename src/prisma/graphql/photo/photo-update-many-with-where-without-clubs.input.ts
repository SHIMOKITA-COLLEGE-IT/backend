import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoScalarWhereInput } from './photo-scalar-where.input';
import { Type } from 'class-transformer';
import { PhotoUpdateManyMutationInput } from './photo-update-many-mutation.input';

@InputType()
export class PhotoUpdateManyWithWhereWithoutClubsInput {

    @Field(() => PhotoScalarWhereInput, {nullable:false})
    @Type(() => PhotoScalarWhereInput)
    where!: PhotoScalarWhereInput;

    @Field(() => PhotoUpdateManyMutationInput, {nullable:false})
    @Type(() => PhotoUpdateManyMutationInput)
    data!: PhotoUpdateManyMutationInput;
}
