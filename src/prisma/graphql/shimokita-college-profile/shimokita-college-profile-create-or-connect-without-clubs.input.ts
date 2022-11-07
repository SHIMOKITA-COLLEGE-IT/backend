import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileWhereUniqueInput } from './shimokita-college-profile-where-unique.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileCreateWithoutClubsInput } from './shimokita-college-profile-create-without-clubs.input';

@InputType()
export class ShimokitaCollegeProfileCreateOrConnectWithoutClubsInput {

    @Field(() => ShimokitaCollegeProfileWhereUniqueInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileWhereUniqueInput)
    where!: ShimokitaCollegeProfileWhereUniqueInput;

    @Field(() => ShimokitaCollegeProfileCreateWithoutClubsInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileCreateWithoutClubsInput)
    create!: ShimokitaCollegeProfileCreateWithoutClubsInput;
}
