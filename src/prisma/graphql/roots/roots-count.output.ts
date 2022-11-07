import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RootsCount {

    @Field(() => Int, {nullable:false})
    myRoots?: number;
}
