import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { RootsType } from '../prisma/roots-type.enum';
import { MyRoots } from '../my-roots/my-roots.model';
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

    @Field(() => [MyRoots], {nullable:true})
    myRoots?: Array<MyRoots>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => RootsCount, {nullable:false})
    _count?: RootsCount;
}
