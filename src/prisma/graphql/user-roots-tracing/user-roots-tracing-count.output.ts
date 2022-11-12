import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserRootsTracingCount {

    @Field(() => Int, {nullable:false})
    userSkillAcquisitions?: number;
}
