import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutProfileInput } from '../user/user-create-nested-one-without-profile.input';
import * as Validator from 'class-validator';
import { SocialLinkCreateNestedManyWithoutProfileInput } from '../social-link/social-link-create-nested-many-without-profile.input';
import { ShimokitaCollegeProfileCreateNestedOneWithoutProfileInput } from '../shimokita-college-profile/shimokita-college-profile-create-nested-one-without-profile.input';
import { MySkillsCreateNestedManyWithoutProfileInput } from '../my-skills/my-skills-create-nested-many-without-profile.input';
import { TagCreateNestedManyWithoutProfilesInput } from '../tag/tag-create-nested-many-without-profiles.input';
import { PhotoCreateNestedManyWithoutProfilesInput } from '../photo/photo-create-nested-many-without-profiles.input';

@InputType()
export class ProfileCreateWithoutMyRootsInput {

    @Field(() => UserCreateNestedOneWithoutProfileInput, {nullable:false})
    user!: UserCreateNestedOneWithoutProfileInput;

    @Field(() => String, {nullable:false})
    @Validator.IsAlphanumeric()
    @Validator.Length(4, 12)
    username!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
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
    position!: string;

    @Field(() => SocialLinkCreateNestedManyWithoutProfileInput, {nullable:true})
    socialLinks?: SocialLinkCreateNestedManyWithoutProfileInput;

    @Field(() => ShimokitaCollegeProfileCreateNestedOneWithoutProfileInput, {nullable:true})
    shimokitaCollegeProfile?: ShimokitaCollegeProfileCreateNestedOneWithoutProfileInput;

    @Field(() => MySkillsCreateNestedManyWithoutProfileInput, {nullable:true})
    mySkills?: MySkillsCreateNestedManyWithoutProfileInput;

    @Field(() => String, {nullable:false})
    bio!: string;

    @Field(() => TagCreateNestedManyWithoutProfilesInput, {nullable:true})
    tags?: TagCreateNestedManyWithoutProfilesInput;

    @Field(() => PhotoCreateNestedManyWithoutProfilesInput, {nullable:true})
    photos?: PhotoCreateNestedManyWithoutProfilesInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
