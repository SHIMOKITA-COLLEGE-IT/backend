import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RootsType } from '../prisma/roots-type.enum';

@InputType()
export class RootsNameRootsTypeCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => RootsType, {nullable:false})
    rootsType!: keyof typeof RootsType;
}
