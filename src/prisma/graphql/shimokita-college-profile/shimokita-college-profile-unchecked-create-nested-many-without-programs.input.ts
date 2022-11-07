import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileCreateWithoutProgramsInput } from './shimokita-college-profile-create-without-programs.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileCreateOrConnectWithoutProgramsInput } from './shimokita-college-profile-create-or-connect-without-programs.input';
import { ShimokitaCollegeProfileWhereUniqueInput } from './shimokita-college-profile-where-unique.input';

@InputType()
export class ShimokitaCollegeProfileUncheckedCreateNestedManyWithoutProgramsInput {

    @Field(() => [ShimokitaCollegeProfileCreateWithoutProgramsInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileCreateWithoutProgramsInput)
    create?: Array<ShimokitaCollegeProfileCreateWithoutProgramsInput>;

    @Field(() => [ShimokitaCollegeProfileCreateOrConnectWithoutProgramsInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileCreateOrConnectWithoutProgramsInput)
    connectOrCreate?: Array<ShimokitaCollegeProfileCreateOrConnectWithoutProgramsInput>;

    @Field(() => [ShimokitaCollegeProfileWhereUniqueInput], {nullable:true})
    @Type(() => ShimokitaCollegeProfileWhereUniqueInput)
    connect?: Array<ShimokitaCollegeProfileWhereUniqueInput>;
}
