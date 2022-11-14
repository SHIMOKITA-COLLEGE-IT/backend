import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RootsType } from '../prisma/roots-type.enum';

@ObjectType()
export class RootsMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => RootsType, {nullable:true})
    rootsType?: keyof typeof RootsType;

    @Field(() => String, {nullable:true})
    googleMapUrl?: string;

    @Field(() => String, {nullable:true})
    introductionUrl?: string;
}
