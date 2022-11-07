import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileCreateWithoutProfileInput } from './shimokita-college-profile-create-without-profile.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileCreateOrConnectWithoutProfileInput } from './shimokita-college-profile-create-or-connect-without-profile.input';
import { ShimokitaCollegeProfileUpsertWithoutProfileInput } from './shimokita-college-profile-upsert-without-profile.input';
import { ShimokitaCollegeProfileWhereUniqueInput } from './shimokita-college-profile-where-unique.input';
import { ShimokitaCollegeProfileUpdateWithoutProfileInput } from './shimokita-college-profile-update-without-profile.input';

@InputType()
export class ShimokitaCollegeProfileUncheckedUpdateOneWithoutProfileNestedInput {

    @Field(() => ShimokitaCollegeProfileCreateWithoutProfileInput, {nullable:true})
    @Type(() => ShimokitaCollegeProfileCreateWithoutProfileInput)
    create?: ShimokitaCollegeProfileCreateWithoutProfileInput;

    @Field(() => ShimokitaCollegeProfileCreateOrConnectWithoutProfileInput, {nullable:true})
    @Type(() => ShimokitaCollegeProfileCreateOrConnectWithoutProfileInput)
    connectOrCreate?: ShimokitaCollegeProfileCreateOrConnectWithoutProfileInput;

    @Field(() => ShimokitaCollegeProfileUpsertWithoutProfileInput, {nullable:true})
    @Type(() => ShimokitaCollegeProfileUpsertWithoutProfileInput)
    upsert?: ShimokitaCollegeProfileUpsertWithoutProfileInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ShimokitaCollegeProfileWhereUniqueInput, {nullable:true})
    @Type(() => ShimokitaCollegeProfileWhereUniqueInput)
    connect?: ShimokitaCollegeProfileWhereUniqueInput;

    @Field(() => ShimokitaCollegeProfileUpdateWithoutProfileInput, {nullable:true})
    @Type(() => ShimokitaCollegeProfileUpdateWithoutProfileInput)
    update?: ShimokitaCollegeProfileUpdateWithoutProfileInput;
}
