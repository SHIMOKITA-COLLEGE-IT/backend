import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileCreateWithoutCoCosInput } from './shimokita-college-profile-create-without-co-cos.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileCreateOrConnectWithoutCoCosInput } from './shimokita-college-profile-create-or-connect-without-co-cos.input';
import { ShimokitaCollegeProfileWhereUniqueInput } from './shimokita-college-profile-where-unique.input';

@InputType()
export class ShimokitaCollegeProfileUncheckedCreateNestedManyWithoutCoCosInput {

    @Field(() => [ShimokitaCollegeProfileCreateWithoutCoCosInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileCreateWithoutCoCosInput)
    create?: Array<ShimokitaCollegeProfileCreateWithoutCoCosInput>;

    @Field(() => [ShimokitaCollegeProfileCreateOrConnectWithoutCoCosInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileCreateOrConnectWithoutCoCosInput)
    connectOrCreate?: Array<ShimokitaCollegeProfileCreateOrConnectWithoutCoCosInput>;

    @Field(() => [ShimokitaCollegeProfileWhereUniqueInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileWhereUniqueInput)
    connect?: Array<ShimokitaCollegeProfileWhereUniqueInput>;
}
