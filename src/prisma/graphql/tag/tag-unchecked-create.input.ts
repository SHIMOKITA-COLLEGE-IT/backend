import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProfileUncheckedCreateNestedManyWithoutTagsInput } from '../profile/profile-unchecked-create-nested-many-without-tags.input';

@InputType()
export class TagUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    iconUrl?: string;

    @Field(() => ProfileUncheckedCreateNestedManyWithoutTagsInput, {nullable:true})
    profiles?: ProfileUncheckedCreateNestedManyWithoutTagsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
