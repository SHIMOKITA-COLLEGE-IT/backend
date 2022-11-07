import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileWhereUniqueInput } from './shimokita-college-profile-where-unique.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileUpdateWithoutHomesInput } from './shimokita-college-profile-update-without-homes.input';
import { ShimokitaCollegeProfileCreateWithoutHomesInput } from './shimokita-college-profile-create-without-homes.input';

@InputType()
export class ShimokitaCollegeProfileUpsertWithWhereUniqueWithoutHomesInput {

    @Field(() => ShimokitaCollegeProfileWhereUniqueInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileWhereUniqueInput)
    where!: ShimokitaCollegeProfileWhereUniqueInput;

    @Field(() => ShimokitaCollegeProfileUpdateWithoutHomesInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileUpdateWithoutHomesInput)
    update!: ShimokitaCollegeProfileUpdateWithoutHomesInput;

    @Field(() => ShimokitaCollegeProfileCreateWithoutHomesInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileCreateWithoutHomesInput)
    create!: ShimokitaCollegeProfileCreateWithoutHomesInput;
}
