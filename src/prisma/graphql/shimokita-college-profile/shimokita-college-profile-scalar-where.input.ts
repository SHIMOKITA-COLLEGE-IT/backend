import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ShimokitaCollegeProfileScalarWhereInput {

    @Field(() => [ShimokitaCollegeProfileScalarWhereInput], {nullable:true})
    AND?: Array<ShimokitaCollegeProfileScalarWhereInput>;

    @Field(() => [ShimokitaCollegeProfileScalarWhereInput], {nullable:true})
    OR?: Array<ShimokitaCollegeProfileScalarWhereInput>;

    @Field(() => [ShimokitaCollegeProfileScalarWhereInput], {nullable:true})
    NOT?: Array<ShimokitaCollegeProfileScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    profileId?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    isAlumni?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    slackEmail?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    roomNumber?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    postNumber?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
