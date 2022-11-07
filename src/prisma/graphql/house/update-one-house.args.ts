import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HouseUpdateInput } from './house-update.input';
import { Type } from 'class-transformer';
import { HouseWhereUniqueInput } from './house-where-unique.input';

@ArgsType()
export class UpdateOneHouseArgs {

    @Field(() => HouseUpdateInput, {nullable:false})
    @Type(() => HouseUpdateInput)
    data!: HouseUpdateInput;

    @Field(() => HouseWhereUniqueInput, {nullable:false})
    @Type(() => HouseWhereUniqueInput)
    where!: HouseWhereUniqueInput;
}
