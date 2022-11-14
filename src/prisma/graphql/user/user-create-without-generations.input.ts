import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { SocialLinkCreateNestedManyWithoutUserInput } from '../social-link/social-link-create-nested-many-without-user.input';
import { Int } from '@nestjs/graphql';
import { GroupCreateNestedManyWithoutUsersInput } from '../group/group-create-nested-many-without-users.input';
import { UserRootsTracingCreateNestedManyWithoutUserInput } from '../user-roots-tracing/user-roots-tracing-create-nested-many-without-user.input';
import { UserSkillAcquisitionCreateNestedManyWithoutUserInput } from '../user-skill-acquisition/user-skill-acquisition-create-nested-many-without-user.input';
import { TagCreateNestedManyWithoutUsersInput } from '../tag/tag-create-nested-many-without-users.input';
import { UserCreatephotoUrlsInput } from './user-createphoto-urls.input';

@InputType()
export class UserCreateWithoutGenerationsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    firebaseAuthUid!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;

    @Field(() => Boolean, {nullable:true})
    disabled?: boolean;

    @Field(() => String, {nullable:true})
    @Validator.IsUrl()
    imageUrl?: string;

    @Field(() => String, {nullable:false})
    @Validator.IsAlphanumeric()
    @Validator.Length(3, 12)
    username!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    firstName!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    lastName!: string;

    @Field(() => String, {nullable:true})
    nickName?: string;

    @Field(() => Boolean, {nullable:true})
    showOnlyNickname?: boolean;

    @Field(() => Date, {nullable:false})
    birthday!: Date | string;

    @Field(() => Boolean, {nullable:true})
    hideAge?: boolean;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    position!: string;

    @Field(() => SocialLinkCreateNestedManyWithoutUserInput, {nullable:true})
    socialLinks?: SocialLinkCreateNestedManyWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    isAlumni?: boolean;

    @Field(() => Int, {nullable:true})
    roomNumber?: number;

    @Field(() => Int, {nullable:true})
    postNumber?: number;

    @Field(() => GroupCreateNestedManyWithoutUsersInput, {nullable:true})
    groups?: GroupCreateNestedManyWithoutUsersInput;

    @Field(() => UserRootsTracingCreateNestedManyWithoutUserInput, {nullable:true})
    roots?: UserRootsTracingCreateNestedManyWithoutUserInput;

    @Field(() => UserSkillAcquisitionCreateNestedManyWithoutUserInput, {nullable:true})
    skills?: UserSkillAcquisitionCreateNestedManyWithoutUserInput;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    bio!: string;

    @Field(() => TagCreateNestedManyWithoutUsersInput, {nullable:true})
    tags?: TagCreateNestedManyWithoutUsersInput;

    @Field(() => UserCreatephotoUrlsInput, {nullable:true})
    photoUrls?: UserCreatephotoUrlsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
