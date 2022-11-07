import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CoCoWhereInput } from './co-co-where.input';
import { Type } from 'class-transformer';
import { CoCoOrderByWithRelationInput } from './co-co-order-by-with-relation.input';
import { CoCoWhereUniqueInput } from './co-co-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CoCoScalarFieldEnum } from './co-co-scalar-field.enum';

@ArgsType()
export class FindFirstCoCoArgs {

    @Field(() => CoCoWhereInput, {nullable:true})
    @Type(() => CoCoWhereInput)
    where?: CoCoWhereInput;

    @Field(() => [CoCoOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CoCoOrderByWithRelationInput>;

    @Field(() => CoCoWhereUniqueInput, {nullable:true})
    cursor?: CoCoWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CoCoScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CoCoScalarFieldEnum>;
}
