import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationType } from '../prisma/generation-type.enum';
import * as Validator from 'class-validator';
import { GenerationCreatephotoUrlsInput } from './generation-createphoto-urls.input';
import { UserCreateNestedManyWithoutGenerationsInput } from '../user/user-create-nested-many-without-generations.input';

@InputType()
export class GenerationCreateInput {

    @Field(() => GenerationType, {nullable:false})
    generationType!: keyof typeof GenerationType;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    from!: Date | string;

    @Field(() => Date, {nullable:false})
    to!: Date | string;

    @Field(() => String, {nullable:true})
    emoji?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsUrl()
    imageUrl?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsHexColor()
    hexColor?: string;

    @Field(() => String, {nullable:true})
    slackChannel?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => GenerationCreatephotoUrlsInput, {nullable:true})
    photoUrls?: GenerationCreatephotoUrlsInput;

    @Field(() => UserCreateNestedManyWithoutGenerationsInput, {nullable:true})
    users?: UserCreateNestedManyWithoutGenerationsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
