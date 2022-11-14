import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { SocialLinkUncheckedCreateNestedManyWithoutUserInput } from '../social-link/social-link-unchecked-create-nested-many-without-user.input';
import { Int } from '@nestjs/graphql';
import { GenerationUncheckedCreateNestedManyWithoutUsersInput } from '../generation/generation-unchecked-create-nested-many-without-users.input';
import { GroupUncheckedCreateNestedManyWithoutUsersInput } from '../group/group-unchecked-create-nested-many-without-users.input';
import { UserSkillAcquisitionUncheckedCreateNestedManyWithoutUserInput } from '../user-skill-acquisition/user-skill-acquisition-unchecked-create-nested-many-without-user.input';
import { TagUncheckedCreateNestedManyWithoutUsersInput } from '../tag/tag-unchecked-create-nested-many-without-users.input';
import { UserCreatephotoUrlsInput } from './user-createphoto-urls.input';

@InputType()
export class UserUncheckedCreateWithoutRootsInput {

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

    @Field(() => SocialLinkUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    socialLinks?: SocialLinkUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    isAlumni?: boolean;

    @Field(() => Int, {nullable:true})
    roomNumber?: number;

    @Field(() => Int, {nullable:true})
    postNumber?: number;

    @Field(() => GenerationUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    generations?: GenerationUncheckedCreateNestedManyWithoutUsersInput;

    @Field(() => GroupUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    groups?: GroupUncheckedCreateNestedManyWithoutUsersInput;

    @Field(() => UserSkillAcquisitionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    skills?: UserSkillAcquisitionUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    bio!: string;

    @Field(() => TagUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    tags?: TagUncheckedCreateNestedManyWithoutUsersInput;

    @Field(() => UserCreatephotoUrlsInput, {nullable:true})
    photoUrls?: UserCreatephotoUrlsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
