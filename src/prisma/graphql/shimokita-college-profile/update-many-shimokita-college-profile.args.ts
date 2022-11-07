import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileUpdateManyMutationInput } from './shimokita-college-profile-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ShimokitaCollegeProfileWhereInput } from './shimokita-college-profile-where.input';

@ArgsType()
export class UpdateManyShimokitaCollegeProfileArgs {

    @Field(() => ShimokitaCollegeProfileUpdateManyMutationInput, {nullable:false})
    @Type(() => ShimokitaCollegeProfileUpdateManyMutationInput)
    data!: ShimokitaCollegeProfileUpdateManyMutationInput;

    @Field(() => ShimokitaCollegeProfileWhereInput, {nullable:true})
    @Type(() => ShimokitaCollegeProfileWhereInput)
    where?: ShimokitaCollegeProfileWhereInput;
}
