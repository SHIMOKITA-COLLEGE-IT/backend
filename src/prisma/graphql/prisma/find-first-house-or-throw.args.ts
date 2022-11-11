import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HouseWhereInput } from '../house/house-where.input';
import { Type } from 'class-transformer';
import { HouseOrderByWithRelationInput } from '../house/house-order-by-with-relation.input';
import { HouseWhereUniqueInput } from '../house/house-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HouseScalarFieldEnum } from '../house/house-scalar-field.enum';

@ArgsType()
export class FindFirstHouseOrThrowArgs {

    @Field(() => HouseWhereInput, {nullable:true})
    @Type(() => HouseWhereInput)
    where?: HouseWhereInput;

    @Field(() => [HouseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HouseOrderByWithRelationInput>;

    @Field(() => HouseWhereUniqueInput, {nullable:true})
    cursor?: HouseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [HouseScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof HouseScalarFieldEnum>;
}
