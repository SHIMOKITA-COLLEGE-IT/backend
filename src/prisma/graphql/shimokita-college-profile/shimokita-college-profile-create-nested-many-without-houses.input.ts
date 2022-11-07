import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileCreateWithoutHousesInput } from './shimokita-college-profile-create-without-houses.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileCreateOrConnectWithoutHousesInput } from './shimokita-college-profile-create-or-connect-without-houses.input';
import { ShimokitaCollegeProfileWhereUniqueInput } from './shimokita-college-profile-where-unique.input';

@InputType()
export class ShimokitaCollegeProfileCreateNestedManyWithoutHousesInput {

    @Field(() => [ShimokitaCollegeProfileCreateWithoutHousesInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileCreateWithoutHousesInput)
    create?: Array<ShimokitaCollegeProfileCreateWithoutHousesInput>;

    @Field(() => [ShimokitaCollegeProfileCreateOrConnectWithoutHousesInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileCreateOrConnectWithoutHousesInput)
    connectOrCreate?: Array<ShimokitaCollegeProfileCreateOrConnectWithoutHousesInput>;

    @Field(() => [ShimokitaCollegeProfileWhereUniqueInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileWhereUniqueInput)
    connect?: Array<ShimokitaCollegeProfileWhereUniqueInput>;
}
