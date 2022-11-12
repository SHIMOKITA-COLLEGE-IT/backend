import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupType } from './group-type.enum';

@InputType()
export class EnumGroupTypeFieldUpdateOperationsInput {

    @Field(() => GroupType, {nullable:true})
    set?: keyof typeof GroupType;
}
