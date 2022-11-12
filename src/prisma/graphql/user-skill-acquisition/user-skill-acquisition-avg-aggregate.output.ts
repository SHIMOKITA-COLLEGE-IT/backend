import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class UserSkillAcquisitionAvgAggregate {

    @Field(() => Float, {nullable:true})
    skillId?: number;

    @Field(() => Float, {nullable:true})
    rootsId?: number;
}
