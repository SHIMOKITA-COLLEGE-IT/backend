import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoCoWhereUniqueInput } from './co-co-where-unique.input';
import { Type } from 'class-transformer';
import { CoCoCreateWithoutShimokitaCollegeProfilesInput } from './co-co-create-without-shimokita-college-profiles.input';

@InputType()
export class CoCoCreateOrConnectWithoutShimokitaCollegeProfilesInput {

    @Field(() => CoCoWhereUniqueInput, {nullable:false})
    @Type(() => CoCoWhereUniqueInput)
    where!: CoCoWhereUniqueInput;

    @Field(() => CoCoCreateWithoutShimokitaCollegeProfilesInput, {nullable:false})
    @Type(() => CoCoCreateWithoutShimokitaCollegeProfilesInput)
    create!: CoCoCreateWithoutShimokitaCollegeProfilesInput;
}
