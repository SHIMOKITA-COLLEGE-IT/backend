import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileWhereUniqueInput } from './shimokita-college-profile-where-unique.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileCreateWithoutProfileInput } from './shimokita-college-profile-create-without-profile.input';

@InputType()
export class ShimokitaCollegeProfileCreateOrConnectWithoutProfileInput {

    @Field(() => ShimokitaCollegeProfileWhereUniqueInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileWhereUniqueInput)
    where!: ShimokitaCollegeProfileWhereUniqueInput;

    @Field(() => ShimokitaCollegeProfileCreateWithoutProfileInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileCreateWithoutProfileInput)
    create!: ShimokitaCollegeProfileCreateWithoutProfileInput;
}
