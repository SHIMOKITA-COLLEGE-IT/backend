import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationType } from './generation-type.enum';

@InputType()
export class EnumGenerationTypeFieldUpdateOperationsInput {

    @Field(() => GenerationType, {nullable:true})
    set?: keyof typeof GenerationType;
}
