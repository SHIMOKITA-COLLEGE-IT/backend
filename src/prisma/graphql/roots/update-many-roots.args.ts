import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RootsUpdateManyMutationInput } from './roots-update-many-mutation.input';
import { Type } from 'class-transformer';
import { RootsWhereInput } from './roots-where.input';

@ArgsType()
export class UpdateManyRootsArgs {

    @Field(() => RootsUpdateManyMutationInput, {nullable:false})
    @Type(() => RootsUpdateManyMutationInput)
    data!: RootsUpdateManyMutationInput;

    @Field(() => RootsWhereInput, {nullable:true})
    @Type(() => RootsWhereInput)
    where?: RootsWhereInput;
}
