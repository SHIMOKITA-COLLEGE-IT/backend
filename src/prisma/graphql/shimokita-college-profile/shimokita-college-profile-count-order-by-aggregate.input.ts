import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ShimokitaCollegeProfileCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    profileId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isAlumni?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slackEmail?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    roomNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    postNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
