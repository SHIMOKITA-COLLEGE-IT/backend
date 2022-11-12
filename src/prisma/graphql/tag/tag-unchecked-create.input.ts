import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserUncheckedCreateNestedManyWithoutTagsInput } from '../user/user-unchecked-create-nested-many-without-tags.input';

@InputType()
export class TagUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    name!: string;

    @Field(() => String, {nullable:true})
    @Validator.IsUrl()
    iconUrl?: string;

    @Field(() => UserUncheckedCreateNestedManyWithoutTagsInput, {nullable:true})
    users?: UserUncheckedCreateNestedManyWithoutTagsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
