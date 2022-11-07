import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoCoScalarWhereInput } from './co-co-scalar-where.input';
import { Type } from 'class-transformer';
import { CoCoUpdateManyMutationInput } from './co-co-update-many-mutation.input';

@InputType()
export class CoCoUpdateManyWithWhereWithoutPhotosInput {

    @Field(() => CoCoScalarWhereInput, {nullable:false})
    @Type(() => CoCoScalarWhereInput)
    where!: CoCoScalarWhereInput;

    @Field(() => CoCoUpdateManyMutationInput, {nullable:false})
    @Type(() => CoCoUpdateManyMutationInput)
    data!: CoCoUpdateManyMutationInput;
}
