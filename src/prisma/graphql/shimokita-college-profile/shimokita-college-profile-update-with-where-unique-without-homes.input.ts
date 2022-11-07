import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileWhereUniqueInput } from './shimokita-college-profile-where-unique.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileUpdateWithoutHomesInput } from './shimokita-college-profile-update-without-homes.input';

@InputType()
export class ShimokitaCollegeProfileUpdateWithWhereUniqueWithoutHomesInput {

    @Field(() => ShimokitaCollegeProfileWhereUniqueInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileWhereUniqueInput)
    where!: ShimokitaCollegeProfileWhereUniqueInput;

    @Field(() => ShimokitaCollegeProfileUpdateWithoutHomesInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileUpdateWithoutHomesInput)
    data!: ShimokitaCollegeProfileUpdateWithoutHomesInput;
}
