import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileUpdateOneRequiredWithoutMyRootsNestedInput } from '../profile/profile-update-one-required-without-my-roots-nested.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { MySkillsUpdateManyWithoutMyRootsNestedInput } from '../my-skills/my-skills-update-many-without-my-roots-nested.input';

@InputType()
export class MyRootsUpdateWithoutRootsInput {

    @Field(() => ProfileUpdateOneRequiredWithoutMyRootsNestedInput, {nullable:true})
    profile?: ProfileUpdateOneRequiredWithoutMyRootsNestedInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    from?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    to?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => MySkillsUpdateManyWithoutMyRootsNestedInput, {nullable:true})
    profilesOnSkills?: MySkillsUpdateManyWithoutMyRootsNestedInput;
}
