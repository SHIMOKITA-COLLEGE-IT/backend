import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoCreateNestedManyWithoutCoCosInput } from '../photo/photo-create-nested-many-without-co-cos.input';

@InputType()
export class CoCoCreateWithoutShimokitaCollegeProfilesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    imageUrl?: string;

    @Field(() => String, {nullable:true})
    slackChannel?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => PhotoCreateNestedManyWithoutCoCosInput, {nullable:true})
    photos?: PhotoCreateNestedManyWithoutCoCosInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
