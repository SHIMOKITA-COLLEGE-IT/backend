import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserSkillAcquisitionCountAggregate } from './user-skill-acquisition-count-aggregate.output';
import { UserSkillAcquisitionAvgAggregate } from './user-skill-acquisition-avg-aggregate.output';
import { UserSkillAcquisitionSumAggregate } from './user-skill-acquisition-sum-aggregate.output';
import { UserSkillAcquisitionMinAggregate } from './user-skill-acquisition-min-aggregate.output';
import { UserSkillAcquisitionMaxAggregate } from './user-skill-acquisition-max-aggregate.output';

@ObjectType()
export class AggregateUserSkillAcquisition {

    @Field(() => UserSkillAcquisitionCountAggregate, {nullable:true})
    _count?: UserSkillAcquisitionCountAggregate;

    @Field(() => UserSkillAcquisitionAvgAggregate, {nullable:true})
    _avg?: UserSkillAcquisitionAvgAggregate;

    @Field(() => UserSkillAcquisitionSumAggregate, {nullable:true})
    _sum?: UserSkillAcquisitionSumAggregate;

    @Field(() => UserSkillAcquisitionMinAggregate, {nullable:true})
    _min?: UserSkillAcquisitionMinAggregate;

    @Field(() => UserSkillAcquisitionMaxAggregate, {nullable:true})
    _max?: UserSkillAcquisitionMaxAggregate;
}
