import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserRootsTracingSumAggregate {

    @Field(() => Int, {nullable:true})
    rootsId?: number;
}
