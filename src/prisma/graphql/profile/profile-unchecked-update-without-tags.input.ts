import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { SocialLinkUncheckedUpdateManyWithoutProfileNestedInput } from '../social-link/social-link-unchecked-update-many-without-profile-nested.input';
import { ShimokitaCollegeProfileUncheckedUpdateOneWithoutProfileNestedInput } from '../shimokita-college-profile/shimokita-college-profile-unchecked-update-one-without-profile-nested.input';
import { MyRootsUncheckedUpdateManyWithoutProfileNestedInput } from '../my-roots/my-roots-unchecked-update-many-without-profile-nested.input';
import { MySkillsUncheckedUpdateManyWithoutProfileNestedInput } from '../my-skills/my-skills-unchecked-update-many-without-profile-nested.input';
import { PhotoUncheckedUpdateManyWithoutProfilesNestedInput } from '../photo/photo-unchecked-update-many-without-profiles-nested.input';

@InputType()
export class ProfileUncheckedUpdateWithoutTagsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    nickName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    showOnlyNickname?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    birthday?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    hideAge?: BoolFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    position?: StringFieldUpdateOperationsInput;

    @Field(() => SocialLinkUncheckedUpdateManyWithoutProfileNestedInput, {nullable:true})
    socialLinks?: SocialLinkUncheckedUpdateManyWithoutProfileNestedInput;

    @Field(() => ShimokitaCollegeProfileUncheckedUpdateOneWithoutProfileNestedInput, {nullable:true})
    shimokitaCollegeProfile?: ShimokitaCollegeProfileUncheckedUpdateOneWithoutProfileNestedInput;

    @Field(() => MyRootsUncheckedUpdateManyWithoutProfileNestedInput, {nullable:true})
    myRoots?: MyRootsUncheckedUpdateManyWithoutProfileNestedInput;

    @Field(() => MySkillsUncheckedUpdateManyWithoutProfileNestedInput, {nullable:true})
    mySkills?: MySkillsUncheckedUpdateManyWithoutProfileNestedInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    bio?: StringFieldUpdateOperationsInput;

    @Field(() => PhotoUncheckedUpdateManyWithoutProfilesNestedInput, {nullable:true})
    photos?: PhotoUncheckedUpdateManyWithoutProfilesNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
