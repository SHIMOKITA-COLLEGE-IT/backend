import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseCreateWithoutShimokitaCollegeProfilesInput } from './house-create-without-shimokita-college-profiles.input';
import { Type } from 'class-transformer';
import { HouseCreateOrConnectWithoutShimokitaCollegeProfilesInput } from './house-create-or-connect-without-shimokita-college-profiles.input';
import { HouseWhereUniqueInput } from './house-where-unique.input';

@InputType()
export class HouseUncheckedCreateNestedManyWithoutShimokitaCollegeProfilesInput {

    @Field(() => [HouseCreateWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => HouseCreateWithoutShimokitaCollegeProfilesInput)
    create?: Array<HouseCreateWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [HouseCreateOrConnectWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => HouseCreateOrConnectWithoutShimokitaCollegeProfilesInput)
    connectOrCreate?: Array<HouseCreateOrConnectWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [HouseWhereUniqueInput], {nullable:true})
    @Type(() => HouseWhereUniqueInput)
    connect?: Array<HouseWhereUniqueInput>;
}
