import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileWhereUniqueInput } from './shimokita-college-profile-where-unique.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileCreateWithoutHousesInput } from './shimokita-college-profile-create-without-houses.input';

@InputType()
export class ShimokitaCollegeProfileCreateOrConnectWithoutHousesInput {

    @Field(() => ShimokitaCollegeProfileWhereUniqueInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileWhereUniqueInput)
    where!: ShimokitaCollegeProfileWhereUniqueInput;

    @Field(() => ShimokitaCollegeProfileCreateWithoutHousesInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileCreateWithoutHousesInput)
    create!: ShimokitaCollegeProfileCreateWithoutHousesInput;
}
