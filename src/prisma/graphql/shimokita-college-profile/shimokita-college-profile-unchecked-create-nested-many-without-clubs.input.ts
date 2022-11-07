import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileCreateWithoutClubsInput } from './shimokita-college-profile-create-without-clubs.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileCreateOrConnectWithoutClubsInput } from './shimokita-college-profile-create-or-connect-without-clubs.input';
import { ShimokitaCollegeProfileWhereUniqueInput } from './shimokita-college-profile-where-unique.input';

@InputType()
export class ShimokitaCollegeProfileUncheckedCreateNestedManyWithoutClubsInput {

    @Field(() => [ShimokitaCollegeProfileCreateWithoutClubsInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileCreateWithoutClubsInput)
    create?: Array<ShimokitaCollegeProfileCreateWithoutClubsInput>;

    @Field(() => [ShimokitaCollegeProfileCreateOrConnectWithoutClubsInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileCreateOrConnectWithoutClubsInput)
    connectOrCreate?: Array<ShimokitaCollegeProfileCreateOrConnectWithoutClubsInput>;

    @Field(() => [ShimokitaCollegeProfileWhereUniqueInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileWhereUniqueInput)
    connect?: Array<ShimokitaCollegeProfileWhereUniqueInput>;
}
