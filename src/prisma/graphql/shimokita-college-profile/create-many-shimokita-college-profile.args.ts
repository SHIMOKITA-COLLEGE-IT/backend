import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShimokitaCollegeProfileCreateManyInput } from './shimokita-college-profile-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyShimokitaCollegeProfileArgs {

    @Field(() => [ShimokitaCollegeProfileCreateManyInput], {nullable:false})
    @Type(() => ShimokitaCollegeProfileCreateManyInput)
    data!: Array<ShimokitaCollegeProfileCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
