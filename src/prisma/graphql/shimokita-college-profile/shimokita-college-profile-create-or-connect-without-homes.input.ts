import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileWhereUniqueInput } from './shimokita-college-profile-where-unique.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileCreateWithoutHomesInput } from './shimokita-college-profile-create-without-homes.input';

@InputType()
export class ShimokitaCollegeProfileCreateOrConnectWithoutHomesInput {

    @Field(() => ShimokitaCollegeProfileWhereUniqueInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileWhereUniqueInput)
    where!: ShimokitaCollegeProfileWhereUniqueInput;

    @Field(() => ShimokitaCollegeProfileCreateWithoutHomesInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileCreateWithoutHomesInput)
    create!: ShimokitaCollegeProfileCreateWithoutHomesInput;
}
