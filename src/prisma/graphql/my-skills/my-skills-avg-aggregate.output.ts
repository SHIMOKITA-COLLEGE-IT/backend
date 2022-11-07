import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class MySkillsAvgAggregate {

    @Field(() => Float, {nullable:true})
    profileId?: number;

    @Field(() => Float, {nullable:true})
    skillId?: number;

    @Field(() => Float, {nullable:true})
    myRootsId?: number;
}
