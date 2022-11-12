import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class UserRootsTracingAvgAggregate {

    @Field(() => Float, {nullable:true})
    rootsId?: number;
}
