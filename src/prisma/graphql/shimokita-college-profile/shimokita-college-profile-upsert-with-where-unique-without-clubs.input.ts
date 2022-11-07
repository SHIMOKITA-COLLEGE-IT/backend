import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileWhereUniqueInput } from './shimokita-college-profile-where-unique.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileUpdateWithoutClubsInput } from './shimokita-college-profile-update-without-clubs.input';
import { ShimokitaCollegeProfileCreateWithoutClubsInput } from './shimokita-college-profile-create-without-clubs.input';

@InputType()
export class ShimokitaCollegeProfileUpsertWithWhereUniqueWithoutClubsInput {

    @Field(() => ShimokitaCollegeProfileWhereUniqueInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileWhereUniqueInput)
    where!: ShimokitaCollegeProfileWhereUniqueInput;

    @Field(() => ShimokitaCollegeProfileUpdateWithoutClubsInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileUpdateWithoutClubsInput)
    update!: ShimokitaCollegeProfileUpdateWithoutClubsInput;

    @Field(() => ShimokitaCollegeProfileCreateWithoutClubsInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileCreateWithoutClubsInput)
    create!: ShimokitaCollegeProfileCreateWithoutClubsInput;
}
