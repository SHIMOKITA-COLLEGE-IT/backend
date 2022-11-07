import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeCreateWithoutShimokitaCollegeProfilesInput } from './home-create-without-shimokita-college-profiles.input';
import { Type } from 'class-transformer';
import { HomeCreateOrConnectWithoutShimokitaCollegeProfilesInput } from './home-create-or-connect-without-shimokita-college-profiles.input';
import { HomeWhereUniqueInput } from './home-where-unique.input';

@InputType()
export class HomeUncheckedCreateNestedManyWithoutShimokitaCollegeProfilesInput {

    @Field(() => [HomeCreateWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => HomeCreateWithoutShimokitaCollegeProfilesInput)
    create?: Array<HomeCreateWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [HomeCreateOrConnectWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => HomeCreateOrConnectWithoutShimokitaCollegeProfilesInput)
    connectOrCreate?: Array<HomeCreateOrConnectWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [HomeWhereUniqueInput], {nullable:true})
    @Type(() => HomeWhereUniqueInput)
    connect?: Array<HomeWhereUniqueInput>;
}
