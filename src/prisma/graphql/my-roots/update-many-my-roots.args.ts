import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MyRootsUpdateManyMutationInput } from './my-roots-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MyRootsWhereInput } from './my-roots-where.input';

@ArgsType()
export class UpdateManyMyRootsArgs {

    @Field(() => MyRootsUpdateManyMutationInput, {nullable:false})
    @Type(() => MyRootsUpdateManyMutationInput)
    data!: MyRootsUpdateManyMutationInput;

    @Field(() => MyRootsWhereInput, {nullable:true})
    @Type(() => MyRootsWhereInput)
    where?: MyRootsWhereInput;
}
