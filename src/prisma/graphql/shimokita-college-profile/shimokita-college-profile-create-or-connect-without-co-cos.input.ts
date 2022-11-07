import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileWhereUniqueInput } from './shimokita-college-profile-where-unique.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileCreateWithoutCoCosInput } from './shimokita-college-profile-create-without-co-cos.input';

@InputType()
export class ShimokitaCollegeProfileCreateOrConnectWithoutCoCosInput {

    @Field(() => ShimokitaCollegeProfileWhereUniqueInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileWhereUniqueInput)
    where!: ShimokitaCollegeProfileWhereUniqueInput;

    @Field(() => ShimokitaCollegeProfileCreateWithoutCoCosInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileCreateWithoutCoCosInput)
    create!: ShimokitaCollegeProfileCreateWithoutCoCosInput;
}
