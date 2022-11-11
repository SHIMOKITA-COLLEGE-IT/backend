import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeWhereInput } from '../home/home-where.input';
import { Type } from 'class-transformer';
import { HomeOrderByWithRelationInput } from '../home/home-order-by-with-relation.input';
import { HomeWhereUniqueInput } from '../home/home-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HomeScalarFieldEnum } from '../home/home-scalar-field.enum';

@ArgsType()
export class FindFirstHomeOrThrowArgs {

    @Field(() => HomeWhereInput, {nullable:true})
    @Type(() => HomeWhereInput)
    where?: HomeWhereInput;

    @Field(() => [HomeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HomeOrderByWithRelationInput>;

    @Field(() => HomeWhereUniqueInput, {nullable:true})
    cursor?: HomeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [HomeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof HomeScalarFieldEnum>;
}
