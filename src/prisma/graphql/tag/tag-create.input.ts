import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserCreateNestedManyWithoutTagsInput } from '../user/user-create-nested-many-without-tags.input';

@InputType()
export class TagCreateInput {

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    name!: string;

    @Field(() => String, {nullable:true})
    @Validator.IsUrl()
    iconUrl?: string;

    @Field(() => UserCreateNestedManyWithoutTagsInput, {nullable:true})
    users?: UserCreateNestedManyWithoutTagsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
