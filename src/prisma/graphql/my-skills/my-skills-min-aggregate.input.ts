import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MySkillsMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    profileId?: true;

    @Field(() => Boolean, {nullable:true})
    skillId?: true;

    @Field(() => Boolean, {nullable:true})
    myRootsId?: true;
}