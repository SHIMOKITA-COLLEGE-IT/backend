import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileCreateWithoutProfileInput } from './shimokita-college-profile-create-without-profile.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileCreateOrConnectWithoutProfileInput } from './shimokita-college-profile-create-or-connect-without-profile.input';
import { ShimokitaCollegeProfileWhereUniqueInput } from './shimokita-college-profile-where-unique.input';

@InputType()
export class ShimokitaCollegeProfileCreateNestedOneWithoutProfileInput {

    @Field(() => ShimokitaCollegeProfileCreateWithoutProfileInput, {nullable:true})
    @Type(() => ShimokitaCollegeProfileCreateWithoutProfileInput)
    create?: ShimokitaCollegeProfileCreateWithoutProfileInput;

    @Field(() => ShimokitaCollegeProfileCreateOrConnectWithoutProfileInput, {nullable:true})
    @Type(() => ShimokitaCollegeProfileCreateOrConnectWithoutProfileInput)
    connectOrCreate?: ShimokitaCollegeProfileCreateOrConnectWithoutProfileInput;

    @Field(() => ShimokitaCollegeProfileWhereUniqueInput, {nullable:true})
    @Type(() => ShimokitaCollegeProfileWhereUniqueInput)
    connect?: ShimokitaCollegeProfileWhereUniqueInput;
}
