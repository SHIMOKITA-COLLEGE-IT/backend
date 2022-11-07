import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { MySkillsUncheckedUpdateManyWithoutMyRootsNestedInput } from '../my-skills/my-skills-unchecked-update-many-without-my-roots-nested.input';

@InputType()
export class MyRootsUncheckedUpdateWithoutProfileInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    rootsId?: IntFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    from?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    to?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => MySkillsUncheckedUpdateManyWithoutMyRootsNestedInput, {nullable:true})
    profilesOnSkills?: MySkillsUncheckedUpdateManyWithoutMyRootsNestedInput;
}
