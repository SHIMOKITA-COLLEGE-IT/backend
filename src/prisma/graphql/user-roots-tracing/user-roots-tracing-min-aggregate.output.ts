import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserRootsTracingMinAggregate {

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => Int, {nullable:true})
    rootsId?: number;

    @Field(() => Date, {nullable:true})
    from?: Date | string;

    @Field(() => Date, {nullable:true})
    to?: Date | string;
}
