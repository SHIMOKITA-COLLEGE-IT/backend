import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HouseUpdateManyMutationInput } from './house-update-many-mutation.input';
import { Type } from 'class-transformer';
import { HouseWhereInput } from './house-where.input';

@ArgsType()
export class UpdateManyHouseArgs {

    @Field(() => HouseUpdateManyMutationInput, {nullable:false})
    @Type(() => HouseUpdateManyMutationInput)
    data!: HouseUpdateManyMutationInput;

    @Field(() => HouseWhereInput, {nullable:true})
    @Type(() => HouseWhereInput)
    where?: HouseWhereInput;
}
