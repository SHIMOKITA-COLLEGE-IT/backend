import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { RootsType } from '../prisma/roots-type.enum';
import { UserRootsTracing } from '../user-roots-tracing/user-roots-tracing.model';
import { RootsCount } from './roots-count.output';

@ObjectType()
export class Roots {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => RootsType, {nullable:false})
    rootsType!: keyof typeof RootsType;

    @Field(() => String, {nullable:true})
    googleMapUrl!: string | null;

    @Field(() => String, {nullable:true})
    introductionUrl!: string | null;

    @Field(() => [UserRootsTracing], {nullable:true})
    users?: Array<UserRootsTracing>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => RootsCount, {nullable:false})
    _count?: RootsCount;
}
