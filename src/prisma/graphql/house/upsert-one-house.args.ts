import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HouseWhereUniqueInput } from './house-where-unique.input';
import { Type } from 'class-transformer';
import { HouseCreateInput } from './house-create.input';
import { HouseUpdateInput } from './house-update.input';

@ArgsType()
export class UpsertOneHouseArgs {

    @Field(() => HouseWhereUniqueInput, {nullable:false})
    @Type(() => HouseWhereUniqueInput)
    where!: HouseWhereUniqueInput;

    @Field(() => HouseCreateInput, {nullable:false})
    @Type(() => HouseCreateInput)
    create!: HouseCreateInput;

    @Field(() => HouseUpdateInput, {nullable:false})
    @Type(() => HouseUpdateInput)
    update!: HouseUpdateInput;
}
