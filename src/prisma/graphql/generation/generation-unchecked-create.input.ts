import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GenerationType } from '../prisma/generation-type.enum';
import * as Validator from 'class-validator';
import { GenerationCreatephotoUrlsInput } from './generation-createphoto-urls.input';
import { UserUncheckedCreateNestedManyWithoutGenerationsInput } from '../user/user-unchecked-create-nested-many-without-generations.input';

@InputType()
export class GenerationUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => UserUncheckedCreateNestedManyWithoutGenerationsInput, {nullable:true})
    users?: UserUncheckedCreateNestedManyWithoutGenerationsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
