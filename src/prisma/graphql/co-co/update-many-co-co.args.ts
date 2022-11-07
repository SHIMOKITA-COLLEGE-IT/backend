import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CoCoUpdateManyMutationInput } from './co-co-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CoCoWhereInput } from './co-co-where.input';

@ArgsType()
export class UpdateManyCoCoArgs {

    @Field(() => CoCoUpdateManyMutationInput, {nullable:false})
    @Type(() => CoCoUpdateManyMutationInput)
    data!: CoCoUpdateManyMutationInput;

    @Field(() => CoCoWhereInput, {nullable:true})
    @Type(() => CoCoWhereInput)
    where?: CoCoWhereInput;
}
