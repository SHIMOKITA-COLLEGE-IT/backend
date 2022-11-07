import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateNestedManyWithoutTagsInput } from '../profile/profile-create-nested-many-without-tags.input';

@InputType()
export class TagCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    iconUrl?: string;

    @Field(() => ProfileCreateNestedManyWithoutTagsInput, {nullable:true})
    profiles?: ProfileCreateNestedManyWithoutTagsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
