import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserSkillAcquisitionMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    skillId?: true;

    @Field(() => Boolean, {nullable:true})
    rootsId?: true;
}
