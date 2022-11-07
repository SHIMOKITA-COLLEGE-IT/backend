import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileWhereUniqueInput } from './shimokita-college-profile-where-unique.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileUpdateWithoutCoCosInput } from './shimokita-college-profile-update-without-co-cos.input';

@InputType()
export class ShimokitaCollegeProfileUpdateWithWhereUniqueWithoutCoCosInput {

    @Field(() => ShimokitaCollegeProfileWhereUniqueInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileWhereUniqueInput)
    where!: ShimokitaCollegeProfileWhereUniqueInput;

    @Field(() => ShimokitaCollegeProfileUpdateWithoutCoCosInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileUpdateWithoutCoCosInput)
    data!: ShimokitaCollegeProfileUpdateWithoutCoCosInput;
}
