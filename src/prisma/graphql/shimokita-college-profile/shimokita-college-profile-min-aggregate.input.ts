import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ShimokitaCollegeProfileMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    profileId?: true;

    @Field(() => Boolean, {nullable:true})
    isAlumni?: true;

    @Field(() => Boolean, {nullable:true})
    slackEmail?: true;

    @Field(() => Boolean, {nullable:true})
    roomNumber?: true;

    @Field(() => Boolean, {nullable:true})
    postNumber?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
