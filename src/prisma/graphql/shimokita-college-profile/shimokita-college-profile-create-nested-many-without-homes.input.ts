import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileCreateWithoutHomesInput } from './shimokita-college-profile-create-without-homes.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileCreateOrConnectWithoutHomesInput } from './shimokita-college-profile-create-or-connect-without-homes.input';
import { ShimokitaCollegeProfileWhereUniqueInput } from './shimokita-college-profile-where-unique.input';

@InputType()
export class ShimokitaCollegeProfileCreateNestedManyWithoutHomesInput {

    @Field(() => [ShimokitaCollegeProfileCreateWithoutHomesInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileCreateWithoutHomesInput)
    create?: Array<ShimokitaCollegeProfileCreateWithoutHomesInput>;

    @Field(() => [ShimokitaCollegeProfileCreateOrConnectWithoutHomesInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileCreateOrConnectWithoutHomesInput)
    connectOrCreate?: Array<ShimokitaCollegeProfileCreateOrConnectWithoutHomesInput>;

    @Field(() => [ShimokitaCollegeProfileWhereUniqueInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileWhereUniqueInput)
    connect?: Array<ShimokitaCollegeProfileWhereUniqueInput>;
}
