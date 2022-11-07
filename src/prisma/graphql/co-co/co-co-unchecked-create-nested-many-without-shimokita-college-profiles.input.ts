import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoCoCreateWithoutShimokitaCollegeProfilesInput } from './co-co-create-without-shimokita-college-profiles.input';
import { Type } from 'class-transformer';
import { CoCoCreateOrConnectWithoutShimokitaCollegeProfilesInput } from './co-co-create-or-connect-without-shimokita-college-profiles.input';
import { CoCoWhereUniqueInput } from './co-co-where-unique.input';

@InputType()
export class CoCoUncheckedCreateNestedManyWithoutShimokitaCollegeProfilesInput {

    @Field(() => [CoCoCreateWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => CoCoCreateWithoutShimokitaCollegeProfilesInput)
    create?: Array<CoCoCreateWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [CoCoCreateOrConnectWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => CoCoCreateOrConnectWithoutShimokitaCollegeProfilesInput)
    connectOrCreate?: Array<CoCoCreateOrConnectWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [CoCoWhereUniqueInput], {nullable:true})
    @Type(() => CoCoWhereUniqueInput)
    connect?: Array<CoCoWhereUniqueInput>;
}
