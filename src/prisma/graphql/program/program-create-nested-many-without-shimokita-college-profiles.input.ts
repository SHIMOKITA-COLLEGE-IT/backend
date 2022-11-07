import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgramCreateWithoutShimokitaCollegeProfilesInput } from './program-create-without-shimokita-college-profiles.input';
import { Type } from 'class-transformer';
import { ProgramCreateOrConnectWithoutShimokitaCollegeProfilesInput } from './program-create-or-connect-without-shimokita-college-profiles.input';
import { ProgramWhereUniqueInput } from './program-where-unique.input';

@InputType()
export class ProgramCreateNestedManyWithoutShimokitaCollegeProfilesInput {

    @Field(() => [ProgramCreateWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => ProgramCreateWithoutShimokitaCollegeProfilesInput)
    create?: Array<ProgramCreateWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [ProgramCreateOrConnectWithoutShimokitaCollegeProfilesInput], {nullable:true})
    @Type(() => ProgramCreateOrConnectWithoutShimokitaCollegeProfilesInput)
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutShimokitaCollegeProfilesInput>;

    @Field(() => [ProgramWhereUniqueInput], {nullable:true})
    @Type(() => ProgramWhereUniqueInput)
    connect?: Array<ProgramWhereUniqueInput>;
}
