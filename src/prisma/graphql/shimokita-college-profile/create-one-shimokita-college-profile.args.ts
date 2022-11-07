import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileCreateInput } from './shimokita-college-profile-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneShimokitaCollegeProfileArgs {

    @Field(() => ShimokitaCollegeProfileCreateInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileCreateInput)
    data!: ShimokitaCollegeProfileCreateInput;
}
