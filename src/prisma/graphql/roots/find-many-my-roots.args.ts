import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MyRootsWhereInput } from '../my-roots/my-roots-where.input';
import { Type } from 'class-transformer';
import { MyRootsOrderByWithRelationInput } from '../my-roots/my-roots-order-by-with-relation.input';
import { MyRootsWhereUniqueInput } from '../my-roots/my-roots-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MyRootsScalarFieldEnum } from '../my-roots/my-roots-scalar-field.enum';

@ArgsType()
export class FindManyMyRootsArgs {

    @Field(() => MyRootsWhereInput, {nullable:true})
    @Type(() => MyRootsWhereInput)
    where?: MyRootsWhereInput;

    @Field(() => [MyRootsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MyRootsOrderByWithRelationInput>;

    @Field(() => MyRootsWhereUniqueInput, {nullable:true})
    cursor?: MyRootsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MyRootsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MyRootsScalarFieldEnum>;
}
