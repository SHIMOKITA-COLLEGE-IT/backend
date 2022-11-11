import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClubWhereInput } from '../club/club-where.input';
import { Type } from 'class-transformer';
import { ClubOrderByWithRelationInput } from '../club/club-order-by-with-relation.input';
import { ClubWhereUniqueInput } from '../club/club-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ClubScalarFieldEnum } from '../club/club-scalar-field.enum';

@ArgsType()
export class FindFirstClubOrThrowArgs {

    @Field(() => ClubWhereInput, {nullable:true})
    @Type(() => ClubWhereInput)
    where?: ClubWhereInput;

    @Field(() => [ClubOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ClubOrderByWithRelationInput>;

    @Field(() => ClubWhereUniqueInput, {nullable:true})
    cursor?: ClubWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ClubScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ClubScalarFieldEnum>;
}
