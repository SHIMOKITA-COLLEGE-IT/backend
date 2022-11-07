import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ShimokitaCollegeProfileUncheckedCreateNestedOneWithoutProfileInput } from '../shimokita-college-profile/shimokita-college-profile-unchecked-create-nested-one-without-profile.input';
import { MyRootsUncheckedCreateNestedManyWithoutProfileInput } from '../my-roots/my-roots-unchecked-create-nested-many-without-profile.input';
import { MySkillsUncheckedCreateNestedManyWithoutProfileInput } from '../my-skills/my-skills-unchecked-create-nested-many-without-profile.input';
import { TagUncheckedCreateNestedManyWithoutProfilesInput } from '../tag/tag-unchecked-create-nested-many-without-profiles.input';
import { PhotoUncheckedCreateNestedManyWithoutProfilesInput } from '../photo/photo-unchecked-create-nested-many-without-profiles.input';

@InputType()
export class ProfileUncheckedCreateWithoutSocialLinksInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    userId!: string;

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

    @Field(() => ShimokitaCollegeProfileUncheckedCreateNestedOneWithoutProfileInput, {nullable:true})
    shimokitaCollegeProfile?: ShimokitaCollegeProfileUncheckedCreateNestedOneWithoutProfileInput;

    @Field(() => MyRootsUncheckedCreateNestedManyWithoutProfileInput, {nullable:true})
    myRoots?: MyRootsUncheckedCreateNestedManyWithoutProfileInput;

    @Field(() => MySkillsUncheckedCreateNestedManyWithoutProfileInput, {nullable:true})
    mySkills?: MySkillsUncheckedCreateNestedManyWithoutProfileInput;

    @Field(() => String, {nullable:false})
    bio!: string;

    @Field(() => TagUncheckedCreateNestedManyWithoutProfilesInput, {nullable:true})
    tags?: TagUncheckedCreateNestedManyWithoutProfilesInput;

    @Field(() => PhotoUncheckedCreateNestedManyWithoutProfilesInput, {nullable:true})
    photos?: PhotoUncheckedCreateNestedManyWithoutProfilesInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
