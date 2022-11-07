import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileWhereUniqueInput } from './shimokita-college-profile-where-unique.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileUpdateWithoutClubsInput } from './shimokita-college-profile-update-without-clubs.input';

@InputType()
export class ShimokitaCollegeProfileUpdateWithWhereUniqueWithoutClubsInput {

    @Field(() => ShimokitaCollegeProfileWhereUniqueInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileWhereUniqueInput)
    where!: ShimokitaCollegeProfileWhereUniqueInput;

    @Field(() => ShimokitaCollegeProfileUpdateWithoutClubsInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileUpdateWithoutClubsInput)
    data!: ShimokitaCollegeProfileUpdateWithoutClubsInput;
}
