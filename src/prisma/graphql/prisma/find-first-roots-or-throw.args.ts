import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RootsWhereInput } from '../roots/roots-where.input';
import { Type } from 'class-transformer';
import { RootsOrderByWithRelationInput } from '../roots/roots-order-by-with-relation.input';
import { RootsWhereUniqueInput } from '../roots/roots-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RootsScalarFieldEnum } from '../roots/roots-scalar-field.enum';

@ArgsType()
export class FindFirstRootsOrThrowArgs {

    @Field(() => RootsWhereInput, {nullable:true})
    @Type(() => RootsWhereInput)
    where?: RootsWhereInput;

    @Field(() => [RootsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RootsOrderByWithRelationInput>;

    @Field(() => RootsWhereUniqueInput, {nullable:true})
    cursor?: RootsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RootsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RootsScalarFieldEnum>;
}
