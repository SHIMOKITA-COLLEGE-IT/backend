import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HouseWhereUniqueInput } from './house-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueHouseArgs {

    @Field(() => HouseWhereUniqueInput, {nullable:false})
    @Type(() => HouseWhereUniqueInput)
    where!: HouseWhereUniqueInput;
}
