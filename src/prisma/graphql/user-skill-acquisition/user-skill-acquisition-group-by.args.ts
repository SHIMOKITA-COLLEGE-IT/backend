import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSkillAcquisitionWhereInput } from './user-skill-acquisition-where.input';
import { Type } from 'class-transformer';
import { UserSkillAcquisitionOrderByWithAggregationInput } from './user-skill-acquisition-order-by-with-aggregation.input';
import { UserSkillAcquisitionScalarFieldEnum } from './user-skill-acquisition-scalar-field.enum';
import { UserSkillAcquisitionScalarWhereWithAggregatesInput } from './user-skill-acquisition-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserSkillAcquisitionCountAggregateInput } from './user-skill-acquisition-count-aggregate.input';
import { UserSkillAcquisitionAvgAggregateInput } from './user-skill-acquisition-avg-aggregate.input';
import { UserSkillAcquisitionSumAggregateInput } from './user-skill-acquisition-sum-aggregate.input';
import { UserSkillAcquisitionMinAggregateInput } from './user-skill-acquisition-min-aggregate.input';
import { UserSkillAcquisitionMaxAggregateInput } from './user-skill-acquisition-max-aggregate.input';

@ArgsType()
export class UserSkillAcquisitionGroupByArgs {

    @Field(() => UserSkillAcquisitionWhereInput, {nullable:true})
    @Type(() => UserSkillAcquisitionWhereInput)
    where?: UserSkillAcquisitionWhereInput;

    @Field(() => [UserSkillAcquisitionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserSkillAcquisitionOrderByWithAggregationInput>;

    @Field(() => [UserSkillAcquisitionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserSkillAcquisitionScalarFieldEnum>;

    @Field(() => UserSkillAcquisitionScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserSkillAcquisitionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserSkillAcquisitionCountAggregateInput, {nullable:true})
    _count?: UserSkillAcquisitionCountAggregateInput;

    @Field(() => UserSkillAcquisitionAvgAggregateInput, {nullable:true})
    _avg?: UserSkillAcquisitionAvgAggregateInput;

    @Field(() => UserSkillAcquisitionSumAggregateInput, {nullable:true})
    _sum?: UserSkillAcquisitionSumAggregateInput;

    @Field(() => UserSkillAcquisitionMinAggregateInput, {nullable:true})
    _min?: UserSkillAcquisitionMinAggregateInput;

    @Field(() => UserSkillAcquisitionMaxAggregateInput, {nullable:true})
    _max?: UserSkillAcquisitionMaxAggregateInput;
}
