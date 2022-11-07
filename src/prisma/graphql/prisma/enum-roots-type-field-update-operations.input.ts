import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RootsType } from './roots-type.enum';

@InputType()
export class EnumRootsTypeFieldUpdateOperationsInput {

    @Field(() => RootsType, {nullable:true})
    set?: keyof typeof RootsType;
}
