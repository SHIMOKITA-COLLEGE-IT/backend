import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileWhereUniqueInput } from './shimokita-college-profile-where-unique.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileUpdateWithoutHousesInput } from './shimokita-college-profile-update-without-houses.input';
import { ShimokitaCollegeProfileCreateWithoutHousesInput } from './shimokita-college-profile-create-without-houses.input';

@InputType()
export class ShimokitaCollegeProfileUpsertWithWhereUniqueWithoutHousesInput {

    @Field(() => ShimokitaCollegeProfileWhereUniqueInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileWhereUniqueInput)
    where!: ShimokitaCollegeProfileWhereUniqueInput;

    @Field(() => ShimokitaCollegeProfileUpdateWithoutHousesInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileUpdateWithoutHousesInput)
    update!: ShimokitaCollegeProfileUpdateWithoutHousesInput;

    @Field(() => ShimokitaCollegeProfileCreateWithoutHousesInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileCreateWithoutHousesInput)
    create!: ShimokitaCollegeProfileCreateWithoutHousesInput;
}
