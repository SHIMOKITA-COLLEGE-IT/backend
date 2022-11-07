import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeUpdateManyMutationInput } from './home-update-many-mutation.input';
import { Type } from 'class-transformer';
import { HomeWhereInput } from './home-where.input';

@ArgsType()
export class UpdateManyHomeArgs {

    @Field(() => HomeUpdateManyMutationInput, {nullable:false})
    @Type(() => HomeUpdateManyMutationInput)
    data!: HomeUpdateManyMutationInput;

    @Field(() => HomeWhereInput, {nullable:true})
    @Type(() => HomeWhereInput)
    where?: HomeWhereInput;
}
